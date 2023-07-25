<script lang="ts">
	import PortableBlock from '$lib/components/PortableBlock.svelte';
	import Image from '$lib/components/Image.svelte';

	import Section from '$lib/components/layout/Section.svelte';
	import Button from '$lib/components/Button.svelte';

	export let data: PageData;
	$: ({ author } = data);
</script>

<Section container>
	<div class="grid grid-cols-5 gap-12">
		<div>
			<Image fitImage image={author.image} alt={author.title} />
		</div>
		<div class="col-span-4">
			<h1>Ramona Galli-Bär</h1>
			<p class="lead">
				Hallo, schön, dass Du zu mir gefunden hast! Ich bin im Säuliamt gross geworden und lebe mit
				meinem Mann und meiner Tochter immer noch in dieser Gegend.
			</p>
			<Button dark href="/ueber-mich">Mehr über mich…</Button>
		</div>
	</div>
	<!-- <img src="aura.svg" />
	<img src="calendar.svg" /> -->
</Section>

<Section title="Session" container>
	<div>
		<img src="time.svg" />
		<h3>Wie lange dauert eine Session und was kostet sie?</h3>
		<p>Eine Session dauert bis 90 Minuten und kostet CHF 180.–.</p>
	</div>
	<div>
		<img src="calendar.svg" />
		<h3>Möchtest du einen Termin vereinbaren oder hast noch Fragen?</h3>
		<p>Dann freue ich mich auf deinen Anruf oder E-Mail.</p>

		<div class="mt-12 space-x-6">
			<Button dark href={'mailto:' + data.layoutData.siteConfig.contact.email}
				>E-Mail schreiben</Button
			>
			<Button hollow href={'tel:' + data.layoutData.siteConfig.contact.phone.replace(/\s/g, '')}
				>{data.layoutData.siteConfig.contact.phone}</Button
			>
		</div>
	</div>
</Section>
