<script lang="ts">
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';

	export let title: string = '';

	let isLoaded: boolean = false;

	onMount(() => {
		setTimeout(() => {
			isLoaded = true;
		}, 0);
	});

	let sectionClass: string = '';

	export { sectionClass as class };
</script>

<section class={sectionClass}>
	{#if isLoaded}
		<div class="bgColor" transition:fade={{ duration: 500 }}>
			<div class="backdrop" />
		</div>
	{/if}
	<div class="container content">
		{#if title}<h2 class="text-center">{title}</h2>{/if}
		<slot />
	</div>
</section>

<style lang="postcss">
	section {
		@apply relative min-h-[475px] py-8 sm:py-32;
	}

	.light {
		.backdrop {
			@apply relative -z-10 h-full w-full;
			@apply bg-divider bg-cover bg-bottom bg-no-repeat;
		}

		.bgColor {
			@apply absolute inset-0 isolate z-10;
			@apply bg-gradient-to-b from-black/20 to-black/10;
		}
	}

	.content {
		@apply relative z-20;
	}

	nav {
		ul {
			@apply flex space-x-12;
			li {
				@apply text-lg;
				a {
					@apply hover:text-primary;
				}
			}
		}
	}
</style>
