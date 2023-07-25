<script lang="ts">
	import Image from '$lib/components/Image.svelte';
	import Button from '$lib/components/Button.svelte';
	import PortableBlock from '$lib/components/PortableBlock.svelte';
	import Section from '$lib/components/layout/Section.svelte';

	export let data: PageData;
	$: ({ author } = data);
</script>

<Section container>
	<div class="gap-12 sm:grid sm:grid-cols-3 md:grid-cols-5">
		<div>
			<Image fitImage image={author.image} alt={author.title} />
		</div>
		<div class="sm:col-span-2 md:col-span-4">
			<h1>{author.name}</h1>
			<PortableBlock content={author.bioText} />
			<div class="mt-12 space-x-6">
				<Button dark href={'mailto:' + data.layoutData.siteConfig.contact.email}
					>E-Mail schreiben</Button
				>
				<Button hollow href={'tel:' + data.layoutData.siteConfig.contact.phone.replace(/\s/g, '')}
					>{data.layoutData.siteConfig.contact.phone}</Button
				>
			</div>
		</div>
	</div>
</Section>
