<script lang="ts">
	import page from '$lib/sanity/schemas/documents/page';
	import Image from '$lib/components/Image.svelte';
	import PortableBlock from '$lib/components/PortableBlock.svelte';

	export let data: PageData;
	$: ({ author } = data);
</script>

<div class="container">
	<div class="grid grid-cols-5 gap-12">
		<div>
			<Image fitImage image={author.image} alt={author.title} />
		</div>
		<div class="col-span-4">
			<h1>{author.name}</h1>
			<PortableBlock content={author.bioText} />
		</div>
	</div>
</div>

<style lang="postcss">
</style>
