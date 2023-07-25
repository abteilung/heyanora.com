import { File, Pen, Eye, ProjectorScreenChart } from '@phosphor-icons/react';
import { defineField, defineType } from 'sanity';

import authorType from './author';
import { getVisibilityState } from '../../lib/helpers/visibility';

export default defineType({
	name: 'page',
	title: 'Page',
	icon: File,
	type: 'document',
	groups: [
		{
			title: 'Default',
			name: 'default',
			icon: Pen,
			default: true
		},
		{
			title: 'Visibility',
			name: 'visibility',
			icon: Eye
		},
		{
			title: 'SEO',
			name: 'seo',
			icon: ProjectorScreenChart
		}
	],

	// 2 columns
	fieldsets: [
		{
			name: 'twoCols',
			title: '',
			options: { collapsible: false, columns: 2 }
		}
	],

	fields: [
		defineField({
			name: 'title',
			title: 'Title',
			type: 'string',
			group: 'default',
			validation: (Rule) => [
				(Rule) => Rule.required(),
				(Rule) => Rule.min(10).warning('Ein Titel sollte mindestens 10 Zeichen lang sein!'),
				(Rule) => Rule.max(120).warning('Bitte kurz fassen!')
			]
		}),
		defineField({
			name: 'slug',
			title: 'Slug',
			type: 'slug',
			group: 'default',
			options: {
				source: 'title',
				maxLength: 96
			},
			validation: (Rule) => Rule.required()
		}),
		defineField({
			name: 'image',
			title: 'Cover Image',
			type: 'image',
			group: 'default',
			options: {
				hotspot: true
			}
		}),
		defineField({
			title: 'Content',
			name: 'body',
			type: 'blockContent',
			group: 'default'
		}),
		defineField({
			name: 'author',
			title: 'Author',
			type: 'reference',
			group: 'default',
			to: [{ type: authorType.name }]
		}),

		// Visibility
		defineField({
			name: 'pub',
			title: 'Visibility',
			type: 'visibility',
			group: 'visibility'
		}),
		defineField({
			name: 'seo',
			title: 'SEO',
			type: 'seo',
			group: 'seo'
		})
	],
	preview: {
		select: {
			title: 'title',
			subtitle: 'subtitle',
			author: 'author.name',
			excerpt: 'body',
			media: 'image',
			startDate: 'pub.publishedAt',
			endDate: 'pub.unpublishedAt',
			isHidden: 'pub.isHidden'
		},
		prepare({ title, media, hidden, startDate, endDate, subtitle, excerpt }) {
			return {
				title: title,
				// Human readable short Date
				subtitle: getVisibilityState(startDate, endDate, hidden) + ` ${subtitle ? subtitle : ''}`,
				// Use Icon instead of Image if isHidden is true
				media
			};
		}
	}
});
