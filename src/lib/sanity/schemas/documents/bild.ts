import { Palette, Calendar } from '@phosphor-icons/react';
import { defineField, defineType } from 'sanity';

export default defineType({
	name: 'bild',
	title: 'Bild',
	icon: Palette,
	type: 'document',
	groups: [
		{ name: 'default', title: 'Default', description: 'Default fields', default: true },
		{
			name: 'publication',
			title: 'Publication',
			description: 'Publication settings',
			icon: Calendar
		}
	],
	fields: [
		defineField({
			name: 'title',
			title: 'Title',
			type: 'string',
			group: 'default'
		}),
		defineField({
			name: 'image',
			title: 'Brand Logo Image',
			type: 'image',
			group: 'default',
			options: {
				hotspot: true
			},
			validation: (Rule) => Rule.required()
		}),
		defineField({
			name: 'description',
			title: 'Description',
			type: 'text',
			group: 'default'
		}),
		// Visibility
		defineField({
			name: 'pub',
			title: 'Visibility',
			type: 'visibility',
			group: 'publication'
		})
	],

	preview: {
		select: {
			title: 'title',
			image: 'image',
			categories: 'categories'
		},
		prepare({ title, image, categories }) {
			return {
				title: title,
				// Get Titles of References from Array of References
				subtitle: categories && categories.map((category) => category.title).join(', '),

				media: image
			};
		}
	}
});
