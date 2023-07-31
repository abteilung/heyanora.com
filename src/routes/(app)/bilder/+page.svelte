<script lang="ts">
	import PortableBlock from '$lib/components/PortableBlock.svelte';
	import Button from '$lib/components/Button.svelte';

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
	$: ({ page } = data);

	// Random number betwween 2 and 4
	$: random = Math.floor(Math.random() * 3) + 2;
</script>

<Section container>
	<PortableBlock content={page.body} />
</Section>
{#if allImages}
	<Section container title="Beispielbilder" class="light">
		<div class="pswp-gallery space-y-4" id={galleryID}>
			<div class="flex space-x-4">
				{#each allImages as image, i}
					{#if i <= 3}
						<Image isGallery fitImage image={image.image} width={1200} class="rounded-lg" />
					{/if}
				{/each}
			</div>
			<div class="flex space-x-4">
				{#each allImages as image, i}
					{#if i > 3 && i <= random * 2}
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

	<Section container>
		<h3>Hast du Interesse an meinen Bildern?</h3>
		<p>Gerne kannst du ein Bild für CHF 180.– bis CHF 360.– bei mir erwerben.</p>

		<div class="mt-12 space-x-6">
			<Button dark href={'mailto:' + data.layoutData.siteConfig.contact.email}
				>E-Mail schreiben</Button
			>
			<Button hollow href={'tel:' + data.layoutData.siteConfig.contact.phone.replace(/\s/g, '')}
				>{data.layoutData.siteConfig.contact.phone}</Button
			>
		</div>
	</Section>
{/if}

<style lang="postcss">
</style>
