<script lang="ts">
	import { PortableText } from '@portabletext/svelte';
	import Link from './PT/Link.svelte';
	import Lists from './PT/Lists.svelte';
	import listItem from './PT/ListItems.svelte';
	import Highlight from './PT/Highlight.svelte';
	import Sup from './PT/Sup.svelte';
	import Sub from './PT/Sub.svelte';

	export let components: any = {
		marks: {
			sup: Sup,
			sub: Sub,
			highlight: Highlight,
			link: Link
		},
		list: {
			bullet: Lists,
			number: Lists
		},
		listItem: {
			normal: listItem
		}
	};

	export let content;
</script>

<PortableText value={content} {components} />
