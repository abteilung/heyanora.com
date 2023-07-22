<script lang="ts">
	import { onMount } from 'svelte';
	import { fly, fade } from 'svelte/transition';
	import { cubicOut } from 'svelte/easing';

	import classNames from 'classnames';
	import IntersectionObserver from '$lib/components/IntersectionObserver.svelte';

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

<IntersectionObserver let:intersecting top={200} once={true}>
	<section class={classNames('overflow-hidden', sectionClass)}>
		{#if intersecting}
			<div
				class="bgColor"
				transition:fly={{
					duration: 500,
					delay: 750,
					easing: cubicOut,
					x: 0,
					y: -500,
					opacity: 0
				}}
			>
				<div class="backdrop" />
			</div>
		{/if}
		<div class="content container">
			{#if title}<h2 class="text-center">{title}</h2>{/if}
			<slot />
		</div>
	</section>
</IntersectionObserver>

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
