<script lang="ts">
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';

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
		<div transition:fade={{ duration: 250 }} class="container">
			<div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-12">
				<div class="hidden sm:block placeholder:navi md:col-span-2">
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
						href="/"
						class="block mx-auto w-32 md:w-48 lg:w-72 xl:w-96 absolute top-0 z-50 sm:block"
						><Logo class="" /></a
					>
				</div>
				<div class="sm:hidden justify-self-end relative z-30"><AnimatedHamburger /></div>
				<div class="hidden sm:block navi md:col-span-2">
					<nav class="flex justify-end">
						<ul>
							<li>
								<a href="./bilder">Bilder</a>
							</li>
							<li>
								<a href="./kontakt">Kontakt</a>
							</li>
						</ul>
					</nav>
				</div>
			</div>
		</div>
	{/if}
</header>

<style lang="postcss">
	header {
		@apply min-h-[475px];
		@apply bg-black/20 bg-divider bg-cover bg-bottom bg-no-repeat py-4 sm:py-12;
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
