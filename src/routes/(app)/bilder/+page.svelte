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
		<div class="pswp-gallery space-y-1" id={galleryID}>
			<div class="flex space-x-1">
				{#each allImages as image, i}
					{#if i <= 3}
						<Image image={image.image} width={480} />
					{/if}
				{/each}
			</div>
			<div class="flex space-x-1">
				{#each allImages as image, i}
					{#if i > 3}
						<Image image={image.image} width={480} />
					{/if}
				{/each}
			</div>
		</div>
	</Section>
{/if}

<div class="flex items-stretch bg-red-200">
	<div class=" bg-red-500 py-12">x</div>
	<div class=" bg-red-500 py-12">x</div>
	<div class=" bg-red-500 py-12">x</div>
</div>

<style lang="postcss">
</style>
