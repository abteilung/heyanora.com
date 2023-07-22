// Imports

// Documents
import pageStructure from './documents/pages';
import navigationStructure from './documents/navigation';
import frontPageStructure from './documents/frontPage';
import faqStructure from './documents/faq';
import settingsStructure from './documents/settings';
import redirectsStructure from './documents/redirects';
import personsStructure from './documents/persons';
import bilderStructure from './documents/bilder';

export const structure = (S) => {
	return S.list()
		.title('Content')
		.items([
			frontPageStructure(S),
			S.divider(),
			pageStructure(S),
			S.divider(),
			personsStructure(S),
			// faqStructure(S),
			S.divider(),
			bilderStructure(S),
			S.divider(),
			settingsStructure(S),
			S.divider(),
			// navigationStructure(S),
			redirectsStructure(S)
		]);
};

export default structure;
