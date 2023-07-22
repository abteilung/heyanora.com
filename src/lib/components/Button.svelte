<script lang="ts">
	import classNames from 'classnames';
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';
	import { cubicInOut } from 'svelte/easing';

	import { goto } from '$app/navigation';
	export let light = false;
	export let hollow = false;

	export let icon: string;
	export let iconRight: boolean = false;
	export let inactive: boolean = false;
	export let circle: boolean = false;
	export let white: boolean = false;
	export let dark: boolean = false;
	export let noZoom: boolean = false;

	// export let size: 'small' | 'medium' | 'large' = 'medium';

	export let label: string;
	export let href: string = null;

	export let additionalClass: string = '';

	// API
	let isLoaded: boolean = false;

	onMount(() => {
		isLoaded = true;
	});

	$: mode = light ? 'light' : dark ? 'dark' : white ? 'white' : 'default';
	$: look = hollow && circle ? 'hollow circle' : hollow ? 'hollow' : circle ? 'circle' : '';
</script>

{#if isLoaded}
	<svelte:element
		this={href ? 'a' : 'button'}
		{href}
		class={classNames(
			'button group',
			mode,
			look,
			noZoom ? 'noZoom' : '',
			inactive ? 'opacity-50 hover:cursor-not-allowed' : 'hover:cursor-pointer',
			additionalClass
		)}
		on:click={goto(href)}
		on:click
		on:change
		on:keydown
		on:keyup
		on:mouseenter
		on:mouseleave
	>
		{#if icon && !iconRight}
			<svg class="icon">
				<use xlink:href="/Icons.svg#{icon}" />
			</svg>
		{/if}
		{#if (circle && !icon) || !circle}
			<div
				class={classNames(
					'whitespace-nowrap justify-self-stretch text-left',
					iconRight ? 'hasIcon' : noZoom ? 'noZoom' : 'group-active:scale-95'
				)}
			>
				<slot>{label}</slot>
			</div>

			{#if icon && iconRight}
				<svg class="icon">
					<use xlink:href="/Icons.svg#{icon}" />
				</svg>
			{/if}
		{/if}
	</svelte:element>
{/if}

<style lang="postcss">
	.button {
		/* Global Styles */
		@apply scale-100 transition-all duration-150;
		@apply text-left font-normal;
		@apply rounded-md uppercase tracking-wide;
		@apply h-[40px] px-6 md:h-[50px];

		&.hasIcon {
			@apply w-full text-center;
		}

		/* For Icons and Label Placement */
		@apply inline-flex items-center  gap-x-4 border-[1px];

		/* Hovers State */
		@apply hover:border-black hover:bg-black hover:text-white;
		@apply hover:scale-105;

		/* Focus State */
		@apply focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent;

		/* Dark Mode */
		@apply dark:bg-white;
		@apply dark:border-white dark:hover:border-white dark:hover:bg-black dark:hover:bg-white dark:hover:text-white dark:hover:shadow-xl;

		&.default {
			@apply text-white;
			@apply border-accent bg-accent;
		}

		&.dark {
			@apply border-black bg-black text-white;
		}

		&.hollow {
			/* Global Styles */
			@apply !bg-transparent;
			@apply !border-accent !text-black;

			/* Hover State */
			@apply hover:border-black hover:bg-black hover:text-white;

			/* Dark Mode */
			@apply dark:border-white dark:bg-black dark:text-white;

			&.light {
				@apply text-black;
				@apply hover:border-black hover:text-white;
			}
		}

		&.light {
			/* Global Styles */
			@apply border-white bg-white text-black shadow-2xl;

			/* Hover State */
			@apply hover:border-white hover:text-black;

			/* Dark Mode */
			@apply dark:bg-black dark:text-white dark:hover:shadow-2xl;
		}

		&.white {
			@apply border-white bg-white text-black shadow-none;
			@apply hover:text-black hover:shadow-2xl;
			&.circle {
				@apply text-black hover:text-accent;
			}
		}
		&.noZoom {
			@apply hover:scale-100 !important;
		}

		&.circle {
			@apply px-0 py-0;
			@apply w-[40px];
			@apply md:w-[50px];
			@apply justify-center;
			&.hollow {
				@apply !bg-transparent;
				@apply !border-black text-black;
			}
		}
	}

	.icon {
		/* Global Styles */
		@apply relative h-6 w-6 duration-100;

		/* Animations */
		@apply scale-100 group-hover:scale-110 group-active:scale-95;
	}
</style>
