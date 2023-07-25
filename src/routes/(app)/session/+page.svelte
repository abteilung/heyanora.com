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
	<div class="gap-12 sm:grid sm:grid-cols-3 md:grid-cols-5">
		<div>
			<Image fitImage image={page.image.asset} alt={page.title} />
		</div>
		<div class="sm:col-span-2 md:col-span-4">
			<PortableBlock content={page.body} />

			<div class="mt-24">
				<div>
					<img src="time.svg" />
					<h3>Wie lange dauert eine Session und was kostet sie?</h3>
					<p>Eine Session dauert bis 90 Minuten und kostet CHF 180.–.</p>
				</div>
				<div>
					<img src="calendar.svg" />
					<h3>Möchtest du einen Termin vereinbaren oder hast noch Fragen?</h3>
					<p>Dann freue ich mich auf deinen Anruf oder E-Mail.</p>

					<div class="mt-12 space-x-6">
						<Button dark href={'mailto:' + data.layoutData.siteConfig.contact.email}
							>E-Mail schreiben</Button
						>
						<Button
							hollow
							href={'tel:' + data.layoutData.siteConfig.contact.phone.replace(/\s/g, '')}
							>{data.layoutData.siteConfig.contact.phone}</Button
						>
					</div>
				</div>
			</div>
		</div>
	</div>
</Section>
