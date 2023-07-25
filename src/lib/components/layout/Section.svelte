<script lang="ts">
	import classNames from 'classnames';

	import Button from '$lib/components/Button.svelte';

	export let settings: any = {};

	export let title: string = (settings.title = '');
	export let linkText: string = settings.linkText || 'Alles anzeigen';
	export let href: string = settings.href || '';

	export let additionalClass: string = '';
	export { additionalClass as class };

	export let size: 'none' | 'small' | 'medium' | 'large' = 'medium';
	export let bgColor: 'white' | 'light' | 'black' | 'primary' | 'accent' =
		settings.backgroundColor || 'white';
	export let container: boolean = settings.container || false;
	export let narrow: boolean = settings.narrow || false;

	$: backgroundColor = bgColor ? `bg-${bgColor}` : '';
	$: colorMode = bgColor === 'black' ? 'dark' : '';
</script>

<section class={classNames(size, backgroundColor, colorMode, additionalClass)}>
	{#if title || href}
		<div
			class={classNames(
				container ? 'container' : '',
				narrow ? 'narrow-container' : '',
				'flex items-center justify-between py-12'
			)}
		>
			{#if title}
				<h2 class="mx-auto mb-0">{title}</h2>
			{/if}
			{#if href}
				<Button hollow {href}>{linkText}</Button>
			{/if}
		</div>
	{/if}
	<div class={classNames(container ? 'container' : '', narrow ? 'narrow-container' : '')}>
		<slot><!-- optional fallback --></slot>
	</div>
</section>

<!-- safe listing: -->
<!-- bg-white bg-black bg-light -->

<style lang="postcss">
	.small {
		@apply py-12;
	}
	.medium {
		@apply py-24;
	}
	.large {
		@apply py-48;
	}
	.none {
		@apply py-0;
	}
	.narrow-container {
		@apply mx-auto w-2/3;
	}

	.bg-primary,
	.bg-black,
	.bg-accent {
		@apply text-white;
	}
</style>
