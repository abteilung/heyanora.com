<script lang="ts">
	import classNames from 'classnames';

	import { urlForImage } from '$lib/sanity';
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';

	export let image: any;
	export let alt: string;
	export let width: number = 1640;
	export let height: number | undefined = undefined;
	export let aspectRatio: number = 1.777;
	export let additionalClass: string;

	// fit modes: 'crop' | 'max' | 'fill' | undefined
	// crop: crops to exact dimensions
	// max: fits within dimensions preserving aspect ratio (no cropping)
	// fill: fills dimensions (may crop)
	// undefined: uses aspectRatio calculation (legacy behavior)
	export let fit: 'crop' | 'max' | 'fill' | undefined = undefined;

	// Legacy support for fitImage prop
	export let fitImage: boolean = false;
	export let isGallery: boolean = false;

	export { additionalClass as class };

	// Map legacy fitImage to new fit parameter
	$: effectiveFit = fit !== undefined ? fit : (fitImage ? 'max' : undefined);

	let isLoaded: boolean = false;

	onMount(() => {
		isLoaded = true;
	});

	// Calculate height based on fit mode
	$: calculatedHeight = (() => {
		// If explicit height is provided and we're cropping, use it
		if (height !== undefined && effectiveFit === 'crop') {
			return height;
		}

		// For 'max' or 'fill' modes, calculate proportional height from original dimensions
		if (effectiveFit === 'max' || effectiveFit === 'fill') {
			if (image?.metadata?.dimensions) {
				return Math.floor(
					(width / image.metadata.dimensions.width) * image.metadata.dimensions.height
				);
			}
		}

		// Legacy behavior: calculate from aspect ratio
		if (height !== undefined) {
			return height;
		}

		return Math.floor(
			width /
				(image && image.customRatio
					? Number(image.customRatio)
					: Number(aspectRatio))
		);
	})();

	// Determine fit mode for URL builder
	$: urlFitMode = effectiveFit === 'crop' ? 'crop' : effectiveFit === 'fill' ? 'fill' : 'max';

	$: src = image ? urlForImage(image, width, calculatedHeight, urlFitMode).url() : '';
	$: largeSrc = image ? urlForImage(image, width, calculatedHeight, urlFitMode).url() : '';

	// Calculate aspect ratio for display
	$: displayAspectRatio = (() => {
		if (effectiveFit === 'crop' && height !== undefined) {
			// For crop mode with explicit dimensions, use the specified ratio
			return width / height;
		}

		// Use custom ratio if available
		if (image?.customRatio) {
			return Number(image.customRatio);
		}

		// Use metadata aspect ratio if available
		if (image?.metadata?.dimensions?.aspectRatio) {
			return Number(image.metadata.dimensions.aspectRatio);
		}

		// Fall back to default aspect ratio
		return aspectRatio;
	})();

	// Determine if we should use background image (for legacy behavior)
	$: useBackground = effectiveFit === undefined;
</script>

{#if isLoaded}
	<svelte:element
		this={effectiveFit ? 'span' : 'div'}
		in:fade={{ duration: 200 }}
		out:fade={{ duration: 200 }}
		class={classNames('image', 'w-full overflow-hidden', additionalClass)}
		style={`
		flex: ${displayAspectRatio.toFixed(3)} 1 0%;
		background-size: cover;
		background-image: url(${useBackground && image?.lqip ? image.lqip : ''});
		background-color: ${useBackground && image?.bgColor ? image.bgColor : ''};
		`}
	>
		{#if image}
			<svelte:element
				this={isGallery ? 'a' : 'span'}
				on:click|preventDefault
				data-pswp-width={isGallery ? width : null}
				data-pswp-height={isGallery ? calculatedHeight : null}
				target={isGallery ? '_blank' : null}
				rel={isGallery ? 'noreferrer' : null}
				href={isGallery ? largeSrc : null}
			>
				<img
					{src}
					alt={alt || image.alt}
					{width}
					height={calculatedHeight}
					style={`aspect-ratio: ${displayAspectRatio.toFixed(3)}`}
				/>
			</svelte:element>
		{:else}
			No Source set
		{/if}
	</svelte:element>
{/if}
