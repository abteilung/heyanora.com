<script lang="ts">
	import Section from '$lib/components/layout/Section.svelte';
	import Button from '$lib/components/Button.svelte';
</script>

<Section class="light" container>
	<div class="grid grid-cols-5 gap-12">
		<div>Portrait</div>
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

<Section class="light" title="Session" container>
	<div>
		<img src="time.svg" />
		<h3>Wie lange dauert eine Session und was kostet sie?</h3>
		<p>Eine Session dauert bis 90 Minuten und kostet CHF 180.–.</p>
	</div>
	<div>
		<img src="calendar.svg" />
		<h3>Möchtest du einen Termin vereinbaren oder hast noch Fragen?</h3>
		<p>Dann freue ich mich auf deinen Anruf oder E-Mail.</p>

		<Button hollow href="mailto:kontakt@heryanora.com">E-Mail schreiben…</Button>
	</div>
</Section>
