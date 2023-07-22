<script>
	import '@fontsource/fira-sans-condensed/latin-300.css';
	import '@fontsource-variable/playfair-display';

	import '../../app.postcss';

	import Header from '$lib/components/layout/Header.svelte';
	import Footer from '$lib/components/layout/Footer.svelte';
</script>

<Header>x</Header>

<div class="contentContainer">
	<slot />
</div>
<Footer>
	<div class="grid grid-cols-4 gap-12 text-white">
		<div>
			<h3 class="h2 text-accent mb-4">Heryanora</h3>
			<nav>
				<ul>
					<li><a href="#">Über mich</a></li>
				</ul>
			</nav>
		</div>
		<div>
			<h3 class="h2 text-accent mb-4">Angebot</h3>
			<nav>
				<ul>
					<li><a href="#">Session</a></li>
					<li><a href="#">Bilder</a></li>
				</ul>
			</nav>
		</div>
		<div>
			<h3 class="h2 text-accent mb-4">Standort</h3>
			<p>
				Heryanora<br />Alte Affolternstrasse 2<br />8909 Zwillikon
			</p>
			<p><a href="#">Routenplaner</a></p>
		</div>
		<div>
			<h3 class="h2 text-accent mb-4">Kontakt</h3>
			<nav>
				<ul>
					<li>+41 79 744 33 35</li>
					<li><a href="#">monabaer@gmx.netf</a></li>
				</ul>
			</nav>
		</div>
	</div>
</Footer>

<style lang="postcss">
	:global(body) {
		@apply flex min-h-screen flex-col;
	}

	.contentContainer {
		@apply flex-1;
	}
</style>
