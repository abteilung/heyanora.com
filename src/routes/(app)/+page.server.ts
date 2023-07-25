import { client } from '$lib/sanity/client';
import { getAuthorInformation } from '$lib/sanity/queries';

export const load: PageServerLoad = async (req: any) => {
	const author = await client.fetch(getAuthorInformation);

	if (author) {
		return {
			author
		};
	} else {
		throw new Error(404, 'No page data found');
	}
};
