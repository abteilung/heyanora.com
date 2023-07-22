<script lang="ts">
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';

	let isLoaded: boolean = false;

	onMount(() => {
		setTimeout(() => {
			isLoaded = true;
		}, 50);
	});
</script>

<footer>
	{#if isLoaded}
		<div class="bgColor" transition:fade={{ duration: 500 }}>
			<div class="backdrop" />
		</div>
	{/if}
	<div class="container content">
		<slot><!-- optional fallback --></slot>
	</div>
</footer>

<style lang="postcss">
	footer {
		@apply relative min-h-[475px] pt-60;
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
