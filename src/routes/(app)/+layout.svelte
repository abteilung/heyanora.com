<script lang="ts">
	import '@fontsource/fira-sans-condensed/400.css';
	import '@fontsource/fira-sans-condensed/700.css';

	import '@fontsource-variable/playfair-display';

	import '../../app.postcss';

	import Header from '$lib/components/layout/Header.svelte';
	import Footer from '$lib/components/layout/Footer.svelte';

	export let data: any;
	$: settings = data.layoutData.siteConfig;
</script>

<Header />

<div class="contentContainer">
	<slot />
</div>

<Footer {settings} />

<style lang="postcss">
	:global(body) {
		@apply flex min-h-screen flex-col;
	}

	.contentContainer {
		@apply flex-1;
	}
</style>
