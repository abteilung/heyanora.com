<script lang="ts">
	export let open = false;
	export let onClick = (): void => {
		open = !open;
	};
	import { fade } from 'svelte/transition';

	// Create Array of 4 Objects of links with Label and href
	export let navMenuMobile: any = [
		{ label: 'Home', href: '/' },
		{ label: 'Bilder', href: '/bilder' },
		{ label: 'Kontakt', href: '/kontakt' },
		{ label: 'Impressum', href: '/impressum' }
	];

	export let ariaLabel = 'toggle menu';
	export let width: string | number = 60;

	// set open to false on ESC
	const handleKeyDown = (event: KeyboardEvent) => {
		if (event.key === 'Escape') {
			open = false;
		}
	};
</script>

<svelte:window on:keydown={handleKeyDown} />

<button
	on:click={onClick}
	aria-expanded={open}
	aria-label={ariaLabel}
	class="md:hidden flex cursor-pointer overflown-hidden items-center z-20 border-transparent focus:border-transparent focus:ring-0 focus:outline-none"
	class:text-white={open}
>
	<svg class:open viewBox="0 0 100 100" fill="none" stroke="currentColor" stroke-width="5" {width}>
		<path
			class="top"
			d="m 30,33 h 40 c 3.722839,0 7.5,3.126468 7.5,8.578427 0,5.451959 -2.727029,8.421573 -7.5,8.421573 h -20"
		/>
		<path class="middle" d="m 30,50 h 40" />
		<path
			class="bottom"
			d="m 70,67 h -40 c 0,0 -7.5,-0.802118 -7.5,-8.365747 0,-7.563629 7.5,-8.634253 7.5,-8.634253 h 20"
		/>
	</svg>
</button>

{#if open}
	<div
		class="bg-black/30 backdrop-blur-md inset-0 fixed top-0 left-0 w-full h-full flex items-center text-white"
		in:fade={{ duration: 400 }}
		out:fade={{ duration: 400 }}
	>
		<div class="container">
			{#if navMenuMobile}
				<ul>
					{#each navMenuMobile as menuItem}
						<li on:click={onClick}>xxx</li>
					{/each}
				</ul>
			{/if}
		</div>
	</div>
{/if}

<style lang="postcss">
	:root {
		--transition-duration: 400ms;
	}

	svg {
		transition: transform var(--transition-duration);
	}

	.top {
		stroke-dasharray: 40 160;
		transition: stroke-dashoffset var(--transition-duration);
	}

	.middle {
		transform-origin: 50%;
		transition: transform var(--transition-duration);
	}

	.bottom {
		stroke-dasharray: 40 85;
		transition: stroke-dashoffset var(--transition-duration);
	}

	.open {
		@apply z-50 rotate-45;
	}

	.open .top,
	.open .bottom {
		stroke-dashoffset: -64px;
	}

	.open .middle {
		transform: rotate(90deg);
	}
</style>
