<script lang="ts">
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';

	let isLoaded: boolean = false;
	export let settings;

	onMount(() => {
		setTimeout(() => {
			isLoaded = true;
		}, 50);
	});
</script>

<!-- {JSON.stringify(settings)} -->

<footer>
	{#if isLoaded}
		<div class="bgColor" transition:fade={{ duration: 500 }}>
			<div class="backdrop" />
		</div>
	{/if}
	<div class="content container">
		<div class="grid grid-cols-2 gap-12 text-white md:grid-cols-4">
			<div>
				<h3 class="mb-4 text-2xl text-accent">Heryanora</h3>
				<nav>
					<ul>
						<li><a href="/ueber-mich">Über mich</a></li>
					</ul>
				</nav>
			</div>
			<div>
				<h3 class="mb-4 text-2xl text-accent">Angebot</h3>
				<nav>
					<ul>
						<li><a href="/session">Session</a></li>
						<li><a href="/bilder">Bilder</a></li>
					</ul>
				</nav>
			</div>
			<div>
				<h3 class="mb-4 text-2xl text-accent">Standort</h3>
				<ul>
					{#each settings.contact.locations as address}
						<li>{address.name}</li>
						<li>{address.address}</li>
						<li>{address.zip} {address.city}</li>
					{/each}
				</ul>
				<p><a href="https://maps.app.goo.gl/tMtcB7s4FT6QEjdt6" target="_blank">Routenplaner</a></p>
			</div>
			<div>
				<h3 class="mb-4 text-2xl text-accent">Kontakt</h3>
				<nav>
					<ul>
						<li>
							<a href={'tel:' + settings.contact.phone.replace(/\s/g, '')}
								>{settings.contact.phone}</a
							>
						</li>

						<li><a href={'mailto:' + settings.contact.email}>{settings.contact.email}</a></li>
					</ul>
				</nav>
			</div>
		</div>
	</div>
</footer>

<style lang="postcss">
	a {
		@apply hover:underline;
	}
	footer {
		@apply relative mt-24 min-h-[475px] pt-40 md:pt-80;
	}

	.backdrop {
		@apply relative -top-1 -z-10 h-full w-full;
		@apply rotate-180 bg-divider bg-cover bg-bottom bg-no-repeat;
	}

	.bgColor {
		@apply absolute inset-0 isolate z-10;
		@apply bg-gradient-to-br from-secondary to-primary;
	}

	.content {
		@apply relative z-20;
	}
</style>
