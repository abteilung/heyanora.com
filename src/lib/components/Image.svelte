<script lang="ts">
	import classNames from 'classnames';

	import { urlForImage } from '$lib/sanity';
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';

	export let image: any;
	export let alt: string;
	export let width: number = image.metadata.dimensions.width || 1640;
	export let height: number = image.metadata.dimensions.height || 1230;
	export let aspectRatio: number = 1.777;
	export let additionalClass: string;

	export let fitImage: boolean = false;

	export { additionalClass as class };

	export let dummySrc: string =
		'https://cdn.sanity.io/images/c0ukxgwn/production/8c8030736bcea6553aef12ae70b852a73c872d03-5305x3537.jpg?rect=295,0,4716,3537&w=1640&h=1230&fit=crop&auto=format';

	let isLoaded: boolean = false;

	// Calculate height from width and Aspect Ratio
	$: calculatedHeight =
		width / (image && image.customRatio ? image.customRatio.toFixed(3) : aspectRatio.toFixed(3));

	onMount(() => {
		isLoaded = true;
	});

	// Todo: what if I have another structure. e.g. showroomImage?
	$: src =
		fitImage === false
			? image
				? urlForImage(image, width, Math.floor(calculatedHeight))
				: dummySrc
			: urlForImage(
					image,
					width,
					Math.floor((width / image.metadata.dimensions.width) * image.metadata.dimensions.height)
			  );
	$: largeSrc =
		fitImage === false
			? image
				? urlForImage(image, width, Math.floor(calculatedHeight))
				: dummySrc
			: urlForImage(
					image,
					width,
					Math.floor(
						(width / image.metadata.dimensions.width) * Math.floor(image.metadata.dimensions.height)
					)
			  );
</script>

{#if isLoaded}
	<svelte:element
		this={fitImage ? 'span' : 'div'}
		in:fade={{ duration: 200 }}
		out:fade={{ duration: 200 }}
		class={classNames('image', ' w-full', additionalClass)}
		style={`
		flex: ${
			fitImage === false
				? image && image.customRatio
					? image.customRatio
					: aspectRatio
				: image.metadata.dimensions.aspectRatio.toFixed(3)
		} 1 0%;
		background-size: cover; 
		background-image: url(${fitImage === false && image && image.lqip ? image.lqip : ''}); 
		background-color: ${fitImage === false && image && image.bgColor ? image.bgColor : ''};
		`}
	>
		{#if image || dummySrc}
			<a
				on:click|preventDefault
				data-pswp-width={width}
				data-pswp-height={fitImage === false
					? calculatedHeight
					: (width / image.metadata.dimensions.width) *
					  Math.floor(image.metadata.dimensions.height)}
				target="_blank"
				rel="noreferrer"
				href={largeSrc}
			>
				<img
					{src}
					alt={alt || image.alt}
					class={classNames(fitImage === true ? 'h-full w-auto' : '')}
					{width}
					height={`${
						fitImage === false
							? calculatedHeight
							: (width / image.metadata.dimensions.width) *
							  Math.floor(image.metadata.dimensions.height)
					}`}
					style={`aspect-ratio: ${
						fitImage === false
							? image && image.customRatio
								? image.customRatio
								: aspectRatio
							: image.metadata.dimensions.aspectRatio.toFixed(3)
					} `}
				/>
			</a>
		{:else}
			No Source set
		{/if}
	</svelte:element>
{/if}