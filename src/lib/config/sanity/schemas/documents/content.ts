import { ArticleNyTimes } from '@phosphor-icons/react';
import { defineField, defineType } from 'sanity';

export default defineType({
	name: 'content',
	title: 'Text',
	type: 'document',
	icon: ArticleNyTimes,
	fields: [
		defineField({
			name: 'title',
			title: 'Title',
			type: 'string'
		}),
		defineField({
			name: 'body',
			title: 'Content',
			type: 'blockContent'
		})
	],

	preview: {
		select: {
			title: 'title'
		},
		prepare(selection) {
			const { title, subTitle, media } = selection;
			return {
				title: title,
				subtitle: subTitle,
				media: media
			};
		}
	}
});
