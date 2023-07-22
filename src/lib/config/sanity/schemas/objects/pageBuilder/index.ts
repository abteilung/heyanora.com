import { defineField, defineType } from 'sanity';
import { LinkSimpleHorizontal } from '@phosphor-icons/react';

export default {
	title: 'Page Builder',
	name: 'pageBuilder',
	icon: LinkSimpleHorizontal,
	type: 'array',
	description: 'Build your Page Blocks',
	of: [
		{ type: 'richEditor' },
		{ type: 'teaserGrid' },
		{ type: 'customImage' },
		{ type: 'columns' },
		{ type: 'testimonialReference' },
		{ type: 'video' },
		{ type: 'accordion' }
		// {type: 'accordions'},
		// {type: 'cta'},
		// {type: 'pricing'},
		// {type: 'testimonials'},
		// {type: 'faq'},
		// {type: 'contact'},
	]
};
