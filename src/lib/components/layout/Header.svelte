<script lang="ts">
	import { onMount } from 'svelte';
	import { fade, fly } from 'svelte/transition';
	import { cubicOut } from 'svelte/easing';

	import Logo from '$lib/components/Logo.svelte';
	import AnimatedHamburger from '$lib/components/AnimatedHamburger.svelte';
	let isLoaded: boolean = false;

	onMount(() => {
		setTimeout(() => {
			isLoaded = true;
		}, 0);
	});
</script>

<header>
	{#if isLoaded}
		<div
			transition:fly={{ duration: 250, easing: cubicOut, x: 0, y: -500, opacity: 0 }}
			class="container"
		>
			<div class="grid grid-cols-2 gap-12 sm:grid-cols-3 md:grid-cols-5">
				<div class="placeholder:navi hidden sm:block md:col-span-2">
					<nav>
						<ul>
							<li>
								<a href="./ueber-mich">Über mich</a>
							</li>
							<li>
								<a href="./session">Session</a>
							</li>
						</ul>
					</nav>
				</div>
				<div class="relative flex items-center justify-evenly text-center">
					<a
						in:fade={{ duration: 250, delay: 250 }}
						href="/"
						class="absolute top-0 z-50 mx-auto block w-32 sm:block md:w-48 lg:w-72 xl:w-96"
						><Logo class="" /></a
					>
				</div>
				<div class="relative z-30 justify-self-end sm:hidden"><AnimatedHamburger /></div>
				<div class="navi hidden sm:block md:col-span-2">
					<nav class="flex justify-end">
						<ul>
							<li>
								<a href="./bilder">Bilder</a>
							</li>
							<!-- <li>
								<a href="./kontakt">Kontakt</a>
							</li> -->
						</ul>
					</nav>
				</div>
			</div>
		</div>
	{/if}
</header>

<style lang="postcss">
	header {
		@apply min-h-[230px] md:min-h-[475px];
		@apply bg-black/40 bg-divider bg-cover bg-bottom bg-no-repeat py-4 sm:py-12;
	}

	nav {
		ul {
			@apply flex space-x-12;
			li {
				@apply text-lg;
				a {
					@apply hover:text-primary;
					@apply whitespace-nowrap;
				}
			}
		}
	}
</style>
