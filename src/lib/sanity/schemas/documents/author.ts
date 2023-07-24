import { User } from '@phosphor-icons/react';
import { defineField, defineType } from 'sanity';

export default defineType({
	name: 'author',
	title: 'Author',
	icon: User,
	type: 'document',
	fields: [
		defineField({
			name: 'name',
			title: 'Name',
			type: 'string',
			validation: (Rule) => Rule.required()
		}),
		defineField({
			name: 'image',
			title: 'Portrait Image',
			type: 'customImage',
			validation: (Rule) => Rule.required()
		}),
		defineField({
			name: 'bio',
			title: 'Bio',
			type: 'array',
			of: [
				{
					title: 'Block',
					type: 'block',
					lists: []
				}
			]
		}),
		defineField({
			name: 'contactText',
			title: 'Kontakt-Text',
			type: 'array',
			of: [
				{
					title: 'Block',
					type: 'block',
					lists: []
				}
			]
		})
	],

	preview: {
		select: {
			title: 'name',
			subtitle: 'email',
			media: 'image.image'
		}
	}
});
