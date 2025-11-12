import { Image } from '@phosphor-icons/react';
import { defineField, defineType } from 'sanity';

export default defineType({
	name: 'customImage',
	title: 'Image',
	type: 'object',
	icon: Image,
	// Preset values
	initialValue: {
		customRatio: 1.777
	},
	fields: [
		defineField({
			name: 'image',
			type: 'image',
			title: 'Image',
			options: {
				hotspot: true
			},
			fields: [
				defineField({
					name: 'alt',
					type: 'string',
					title: 'Alternative text',
					description: 'Important for SEO and accessiblity.'
				}),
				defineField({
					name: 'customRatio',
					type: 'number',
					title: 'Aspect ratio',
					description: 'Set a custom aspect ratio for the image',
					initialValue: 1.777,
					options: {
						list: [
							{ title: 'Original', value: 0 },
							{ title: '1 : 1 (square)', value: 1 },
							{ title: '5 : 7', value: 0.714 },
							{ title: '4 : 3', value: 1.333 },
							{ title: '16 : 9', value: 1.777 }
						]
					}
				})
			]
		})
	],
	preview: {
		select: {
			media: 'image',
			title: 'image.alt'
		},
		prepare({ title, media }) {
			return {
				title,
				media,
				icon: Image
			};
		}
	}
});
