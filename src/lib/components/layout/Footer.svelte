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

{JSON.stringify(settings)}

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
						<li><a href="#">Über mich</a></li>
					</ul>
				</nav>
			</div>
			<div>
				<h3 class="mb-4 text-2xl text-accent">Angebot</h3>
				<nav>
					<ul>
						<li><a href="#">Session</a></li>
						<li><a href="#">Bilder</a></li>
					</ul>
				</nav>
			</div>
			<div>
				<h3 class="mb-4 text-2xl text-accent">Standort</h3>
				<p>
					Heryanora<br />Alte Affolternstrasse 2<br />8909 Zwillikon
				</p>
				<p><a href="#">Routenplaner</a></p>
			</div>
			<div>
				<h3 class="mb-4 text-2xl text-accent">Kontakt</h3>
				<nav>
					<ul>
						<li>+41 79 744 33 35</li>
						<li><a href="#">monabaer@gmx.netf</a></li>
					</ul>
				</nav>
			</div>
		</div>
	</div>
</footer>

<style lang="postcss">
	footer {
		@apply relative min-h-[475px] pt-40 md:pt-80;
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
