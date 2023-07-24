import { client } from '$lib/sanity/client';
import { getLayoutData } from '$lib/sanity/queries';

// Make it prerendering and SSR
export const prerender = true;
export const ssr = true;

export const load = async ({ locals, cookies }) => {
	const layoutData = await client.fetch(getLayoutData);

	return {
		layoutData: layoutData
	};
};

// const {...headers} = response
// const responseHeaders = new Headers(headers)
// return new Response(response, {headers: responseHeaders})
