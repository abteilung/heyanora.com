<script lang="ts">
	import classNames from 'classnames';

	import { urlForImage } from '$lib/sanity';
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';

	export let image: any;
	export let alt: string;
	export let width: number = image.asset?.metadata?.dimensions?.width || 1640;
	export let height: number = image.asset?.metadata?.dimensions?.height || 1230;
	export let aspectRatio: number = 1.777;
	export let additionalClass: string;

	export let fitImage: boolean = false;

	export { additionalClass as class };

	export let dummySrc: string =
		'https://cdn.sanity.io/images/c0ukxgwn/production/8c8030736bcea6553aef12ae70b852a73c872d03-5305x3537.jpg?rect=295,0,4716,3537&w=1640&h=1230&fit=crop&auto=format';

	let isLoaded: boolean = false;

	// Calculate height from width and Aspect Ratio
	$: calculatedHeight = Math.floor(
		width / (image && image.customRatio ? image.customRatio : aspectRatio)
	);

	onMount(() => {
		isLoaded = true;
	});

	// Todo: what if I have another structure. e.g. showroomImage?
	$: src =
		fitImage !== true
			? image
				? urlForImage(image, width, calculatedHeight)
				: dummySrc
			: urlForImage(image, width, height);
	$: largeSrc =
		fitImage !== true
			? image
				? urlForImage(image, width * 4, calculatedHeight * 4)
				: dummySrc
			: urlForImage(image, width * 4, height) * 4;
</script>

{#if isLoaded}
	<a
		on:click|preventDefault
		href={largeSrc}
		data-pswp-width={fitImage !== true ? width * 4 : image.asset?.metadata?.dimensions?.width * 4}
		data-pswp-height={fitImage !== true
			? calculatedHeight * 4
			: image.asset?.metadata?.dimensions?.height * 4}
		target="_blank"
		rel="noreferrer"
	>
		<div
			in:fade={{ duration: 200 }}
			out:fade={{ duration: 200 }}
			class={classNames('image', 'relative w-full overflow-hidden', additionalClass)}
			style={`
		background-size: cover; 
		background-image: url(${fitImage !== true && image && image.lqip ? image.lqip : ''}); 
		background-color: ${fitImage !== true && image && image.bgColor ? image.bgColor : ''};
		aspect-ratio: ${fitImage !== true && image && image.customRatio ? image.customRatio : aspectRatio};
		`}
		>
			{#if image || dummySrc}
				<img
					{src}
					alt={alt || image.alt}
					class={classNames(
						fitImage !== false
							? 'absolute top-1/2 -translate-y-1/2 object-cover object-center'
							: 'h-full w-full '
					)}
					width={`${fitImage !== true ? width : image.asset?.metadata?.dimensions?.width}px"`}
					height={`${
						fitImage !== true ? calculatedHeight : image.asset?.metadata?.dimensions?.height
					}px`}
					style={`aspect-ratio: ${
						fitImage !== true ? (image && image.customRatio ? image.customRatio : aspectRatio) : ''
					} `}
				/>
			{:else}
				No Source set
			{/if}
		</div>
	</a>
{/if}
