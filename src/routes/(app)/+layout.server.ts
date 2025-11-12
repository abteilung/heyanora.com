import { client } from '$lib/sanity/client';
import { getLayoutData } from '$lib/sanity/queries';

// Dynamic SSR - changes in Sanity appear immediately
export const ssr = true;

export const load = async ({ locals, cookies, setHeaders }) => {
	const layoutData = await client.fetch(getLayoutData);

	// Optional: Add cache headers for CDN edge caching
	// Adjust max-age based on how quickly changes should appear
	setHeaders({
		'Cache-Control': 'public, max-age=0, s-maxage=60, stale-while-revalidate=300'
	});

	return {
		layoutData: layoutData
	};
};

// const {...headers} = response
// const responseHeaders = new Headers(headers)
// return new Response(response, {headers: responseHeaders})
