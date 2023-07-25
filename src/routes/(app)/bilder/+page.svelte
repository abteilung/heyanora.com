<script lang="ts">
	import { onMount } from 'svelte';
	import PhotoSwipeLightbox from 'photoswipe/lightbox';
	import 'photoswipe/style.css';

	import Section from '$lib/components/layout/Section.svelte';
	import Image from '$lib/components/Image.svelte';

	const galleryID: string = 'gallery';

	onMount(() => {
		let lightbox = new PhotoSwipeLightbox({
			gallery: '#' + galleryID,
			children: 'a',
			pswpModule: () => import('photoswipe')
		});
		lightbox.init();
	});
	export let allImages: any[];

	export let data: PageData;
	$: ({ allImages } = data);

	// Random number betwween 2 and 4
	$: random = Math.floor(Math.random() * 3) + 2;
</script>

<Section container>
	<p>Ich liebe das Malen seit meiner Kindheit.</p>
	<p>
		Es gab eine Zeit, in der ich keinen Zugang zu meinem Talent, dem Malen verspürte. Erst als ich
		mehr Klarheit in mir selbst schaffen konnte, wusste ich genau, dass ich mit diesem wunderbaren
		Geschenk persönliche Bilder für Kinder und Erwachsene malen möchte.
	</p>
	<p>
		Meine Bilder sollen Begleiter und Unterstützung in jeder Lebenslage dienen. Sie sollen dich
		daran erinnern, dass du immer gehalten, getragen und geliebt wirst. Jedes Bild ist ein Unikat
		und für dich persönlich bestimmt.
	</p>
	<p>
		Es soll dich darin bestärken, auf deine Intuition zu hören und deine Lebensaufgaben mit grosser
		Lebensfreude und vollstem Vertrauen zu meistern.
	</p>
</Section>
{#if allImages}
	<Section container title="Beispielbilder">
		<div class="pswp-gallery space-y-4" id={galleryID}>
			<div class="flex space-x-4">
				{#each allImages as image, i}
					{#if i <= random}
						<Image isGallery fitImage image={image.image} width={1200} class="rounded-lg" />
					{/if}
				{/each}
			</div>
			<div class="flex space-x-4">
				{#each allImages as image, i}
					{#if i > random && i <= random * 2}
						<Image isGallery fitImage image={image.image} width={1200} class="rounded-lg" />
					{/if}
				{/each}
			</div>
			<div class="flex space-x-4">
				{#each allImages as image, i}
					{#if i > random * 2 && i <= random * 3}
						<Image isGallery fitImage image={image.image} width={1200} class="rounded-lg" />
					{/if}
				{/each}
			</div>
			<div class="flex space-x-4">
				{#each allImages as image, i}
					{#if i > random * 3 && i <= random * 4}
						<Image isGallery fitImage image={image.image} width={1200} class="rounded-lg" />
					{/if}
				{/each}
			</div>
		</div>
	</Section>
{/if}

<style lang="postcss">
</style>
