<script lang="ts">
	import { page } from '$app/stores';

	// Get Page URL from { page }
	const path: string = $page.url.pathname;
</script>

<h1>{path}</h1>
