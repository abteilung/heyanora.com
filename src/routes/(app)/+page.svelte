<script lang="ts">
	import Section from '$lib/components/layout/Section.svelte';
	import Button from '$lib/components/Button.svelte';
</script>

<div class="container">
	<div class="grid grid-cols-5 gap-12">
		<div>Portrait</div>
		<div class="col-span-4">
			<h1>Ramona Galli-Bär</h1>
			<p class="lead">
				Hallo, schön, dass Du zu mir gefunden hast! Ich bin im Säuliamt gross geworden und lebe mit
				meinem Mann und meiner Tochter immer noch in dieser Gegend.
			</p>
		</div>
	</div>
	<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

	<img src="aura.svg" />
	<img src="calendar.svg" />
</div>
<Section class="light" title="Session">
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

<Section>
	<div>
		<img src="time.svg" />
		<h3>Wie lange dauert eine Session und was kostet sie?</h3>
		<p>Eine Session dauert bis 90 Minuten und kostet CHF 180.–.</p>
	</div>
	<div>
		<img src="calendar.svg" />
		<h3>Möchtest du einen Termin vereinbaren oder hast noch Fragen?</h3>
		<p>Dann freue ich mich auf deinen Anruf oder E-Mail.</p>
	</div></Section
>
