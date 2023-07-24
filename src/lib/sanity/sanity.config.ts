import { defineConfig, type Slug } from 'sanity';
import { availability } from 'sanity-plugin-availability';
import { googleMapsInput } from '@sanity/google-maps-input';
import { colorInput } from '@sanity/color-input';
// import { copyPastePlugin } from '@superside-oss/sanity-plugin-copy-paste';

import { noteField } from 'sanity-plugin-note-field';
import app from '../config/app';

/*-------------- PLUGINS --------------*/
import { visionTool } from '@sanity/vision';
import { deskTool } from 'sanity/desk';
import { media } from 'sanity-plugin-media';
import { unsplashImageAsset } from 'sanity-plugin-asset-source-unsplash';
/*------------------------------------*/

/*-------------- SCHEMAS --------------*/
import blockContent from './schemas/helpers/blockContent';

import settingsType from './schemas/documents/settings';
import redirectType from './schemas/documents/redirect';
import settingsContactType from './schemas/documents/settingsContact';
import settingsAnalyticsType from './schemas/documents/settingsAnalytics';

import pageType from './schemas/documents/page';
import contentType from './schemas/documents/content';
import metaType from './schemas/documents/meta';
import bildType from './schemas/documents/bild';
import testimonialType from './schemas/documents/testimonial';
import categoryType from './schemas/documents/category';
import faqType from './schemas/documents/faq';
import faqCategory from './schemas/documents/faqCategory';
import accordionsType from './schemas/objects/accordions';
import accordionType from './schemas/objects/accordion';
import authorType from './schemas/documents/author';

// Objects
import video from './schemas/objects/video';
import customImage from './schemas/objects/customImage';
import testimonialReference from './schemas/objects/testimonialReference';
import faqReference from './schemas/objects/faqReference';

// PageBuilder
import pageBuilder from './schemas/objects/pageBuilder';
import richEditor from './schemas/objects/pageBuilder/richEditor';
import teaserGrid from './schemas/objects/pageBuilder/teaserGrid';
import columns from './schemas/objects/pageBuilder/columns';

// Navigatons
import menu from './schemas/documents/menu';
import navigations from './schemas/documents/navigations';
import navDropdown from './schemas/objects/nav-dropdown';
import navPage from './schemas/objects/nav-page';
import navLink from './schemas/objects/nav-link';
import navSection from './schemas/objects/nav-section';

// Fragments
import seo from './schemas/fragments/seo';
import visibility from './schemas/fragments/visibility';

/*------------------------------------*/

import { structure } from './structure';

export default defineConfig({
	basePath: '/studio',
	projectId: import.meta.env.VITE_SANITY_PROJECT_ID,
	dataset: import.meta.env.VITE_SANITY_DATASET,
	title: app.appName,
	schema: {
		// If you want more content types, you can add them to this array

		types: [
			// PageBuilder
			pageBuilder,
			richEditor,
			teaserGrid,
			columns,

			// Documents
			pageType,
			contentType,
			metaType,
			bildType,
			authorType,
			testimonialType,
			accordionsType,
			accordionType,
			categoryType,
			faqType,
			faqCategory,
			blockContent,
			redirectType,

			// Settings
			settingsType,
			settingsContactType,
			settingsAnalyticsType,

			// Objects
			video,
			customImage,
			testimonialReference,
			faqReference,

			// components
			//   shcemas/objects
			menu,
			navigations,
			navDropdown,
			navPage,
			navLink,
			navSection,

			// Fragments
			seo,
			visibility
		]
		// If you want to add more schemas, you can add them here
	},
	plugins: [
		deskTool({
			structure: structure
			// `defaultDocumentNode is responsible for adding a “Preview” tab to the document pane
			// You can add any React component to `S.view.component` and it will be rendered in the pane
			// and have access to content in the form in real-time.
			// It's part of the Studio's “Structure Builder API” and is documented here:
			// https://www.sanity.io/docs/structure-builder-reference
		}),
		// Add an image asset source for Unsplash
		unsplashImageAsset(),
		// Vision lets you query your content with GROQ in the studio
		// https://www.sanity.io/docs/the-vision-plugin
		visionTool({
			defaultApiVersion: '2022-08-08'
		}),
		media(),
		noteField(),
		colorInput(),
		googleMapsInput({
			apiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY
		}),
		availability()
	]
});
