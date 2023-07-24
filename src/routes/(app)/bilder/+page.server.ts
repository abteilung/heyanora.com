import { client } from '$lib/sanity/client';
import { getAllImages } from '$lib/sanity/queries';

export const load: PageServerLoad = async (req: any) => {
	const slug = req.params.slug;
	// const page = await client.fetch(getPageBySlug, { slug: slug });
	const allImages = await client.fetch(getAllImages);

	if (allImages) {
		return {
			allImages
		};
	} else {
		throw new Error(404, 'No page data found');
	}
};
