<script lang="ts">
	import Section from '$lib/components/layout/Section.svelte';
	import Image from '$lib/components/Image.svelte';

	export let allImages: any[];

	export let data: PageData;
	$: ({ allImages } = data);
</script>

<Section container>
	<p>Ich liebe das Malen seit meiner Kindheit.</p>
	<p>
		Es gab eine Zeit, in der ich keinen Zugang zu meinem Talent, dem Malen verspürte. Erst als ich
		mehr Klarheit in mir selbst schaffen konnte, wusste ich genau, dass ich mit diesem wunderbaren
		Geschenk persönliche Bilder für Kinder und Erwachsene malen möchte.
	</p>
	<p>
		Meine Bilder sollen Begleiter und Unterstützung in jeder Lebenslage dienen. Sie sollen dich
		daran erinnern, dass du immer gehalten, getragen und geliebt wirst. Jedes Bild ist ein Unikat
		und für dich persönlich bestimmt.
	</p>
	<p>
		Es soll dich darin bestärken, auf deine Intuition zu hören und deine Lebensaufgaben mit grosser
		Lebensfreude und vollstem Vertrauen zu meistern.
	</p>
</Section>

{#if allImages}
	<Section container title="Beispielbilder">
		{#each allImages as image}
			{JSON.stringify(image)}
			{#if image}
				<Image {image} />
			{/if}
		{/each}
	</Section>
{/if}
