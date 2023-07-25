<script lang="ts">
	import page from '$lib/sanity/schemas/documents/page';
	import Image from '$lib/components/Image.svelte';

	export let data: PageData;
	$: ({ author } = data);
</script>

<div class="container">
	<div class="grid grid-cols-5 gap-12">
		<div>
			<Image fitImage image={author.image} alt={author.title} />
		</div>
		<div class="col-span-4">
			<h1>{author.name}</h1>
			<p class="lead">
				Ich bin die Ramona bin im Säuliamt gross geworden und lebe mit meinem Mann und meiner
				Tochter immer noch in dieser Gegend.
			</p>

			<p>
				&nbsp;Schon als Kind habe ich entdeckt ,dass ich bei Menschen störende Energien oder auch
				Blockaden ganz automatisch wahrnehme welche sich nicht mehr im natürlichen Fluss bewegen.
				Was ich damit anfangen sollte, wurde mir jedoch erst viel später bewusst....
			</p>
			<p>
				Meine Kindheit verlief alles andere als reibungslos. Kleinere und grössere Traumata und
				damit verbunden, viele einschränkende Muster wie auch Glaubensätze prägten meine
				Entwicklung. Sie führten, im Laufe meines Lebens, zu immer mehr häufigerem Unwohlsein und
				mit der Zeit zu körperlichen Schmerzen und Erschöpfungszuständen. Kurz und gut, befand ich
				mich in einer destruktiven Energiespirale, die meinen inneren Frieden in vermeintlicher
				Ferne rückte.&nbsp;
			</p>
			<p>
				Dennoch war es schon immer mein innerstes Bedürfnis mich selbst zu finden. Tief in meinem
				Inneren wusste ich, dass dies möglich ist. Mein unbändiger Lebenswille und meine Lebenskraft
				halfen mir dabei, Schritt für Schritt auf meiner persönlichen Lebensreise zu gehen und immer
				mehr zu mir selbst zu finden.
			</p>
			<p>
				Ich durfte auf meinem Weg mit der Ahnam Ahyah Frequenz Heilung in Berührung kommen. Hier
				lernte ich unter anderem zu verstehen und erkennen, weshalb mir all diese vermeintlich
				schrecklichen Dinge in meinem Leben widerfahren sind. Ich lernte mit dieser Technik,
				Glaubensätze und Muster, welche mir nicht mehr zu meinem Wohl dienten, aufzulösen. Zum
				ersten Mal verspürte ich viel mehr Platz und Ruhe in mir selbst. Ich lernte meinen Körper
				und dessen Sprache bewusster wahrzunehmen und löste unter anderem Schritt für Schritt
				Resonanzen auf, welche sich auf Körperebene bemerkbar machten. Allmählich wandelte sich die
				destruktive Energie immer mehr zu konstruktiver Energie. Die vielen Schmerzen und
				Erschöpfungszustände wichen einem neuen Körpergefühl, welches ich nicht mehr missen möchte.
			</p>
			<p>
				Im Laufe meiner Weiterentwicklung, u.a. durch meine geistigen Lehrer, wurde mir immer mehr
				klarer wohin mich mein Weg führt. Diese Unstimmigkeiten im menschlichem System - Aura, die
				ich seit meiner frühsten Kindheit war nehme, sind u.a. energetische Blockaden, die sich im
				Laufe unseres Lebens u.a auch nach Trauma Erlebnissen , in unserem System "einnisten" welche
				sich wiederum auf den Körper und die Psyche auswirken. Dort nehmen wir sie dann als
				Schmerzen, Druck wie auch innere Unruhe, Stress &nbsp;war und sie führen unbehandelt
				irgendwann unweigerlich zu Beschwerden. Heute weiss ich, dass es zu meinen Aufgaben gehört,
				diese Blockaden zu lösen. <strong
					>Durch meine eigene Geschichte, welche Traumas beinhalten, weiss ich wie wichtig es ist,
					diese Erlebnisse unter anderem auch verstehen zu wollen. Sich selbst wieder lieben und das
					damit verbundene Vertrauen zu sich selbst zu erlangen. Sich abermals in einem
					Gleichgewicht zu befinden das dir Sicherheit gibt. Den tiefsten Frieden mit sich selbst
					wieder zu erlangen - zu</strong
				> <strong>entdecken.</strong> Ausserdem aktiviere ich verschiedenste Informationen. Mann kann
				sich dies vorstellen wie kleine Geschenke, die nur darauf warten, geöffnet zu werden. Sie dienen
				dir in deinem jetzigen Leben, in deine volle Lebenskraft zu kommen und damit du, mit der Sanftheit
				des Wassers, in den Fluss deines Lebens eintauchen darfst. All dies zur Unterstützung auf deinem
				wunderbaren Lebensweg.
			</p>
			<p>
				Ich freue mich, wenn du zu mir findest und ich Dich auf deinem persönlichen Lebens und
				Heilsweg begleiten darf. &nbsp; &nbsp; &nbsp;
			</p>
			<p>&nbsp;</p>
			<p>Alles Liebe Ramona<br />&nbsp;</p>
			<h3>Meine Ausbildungen:</h3>
			<ul class="ul">
				<li>2018 Ayurveda Masseurin Ausbildung</li>
				<li>2008 Ausbildung als Ernährungs-Beraterin</li>
				<li>2003 Ausbildung zur Köchin</li>
			</ul>
		</div>
	</div>
</div>

<style lang="postcss">
</style>
