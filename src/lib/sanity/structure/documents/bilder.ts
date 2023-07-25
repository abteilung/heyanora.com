import { Palette, Info } from '@phosphor-icons/react';

export function bilderStructure(S) {
	return S.listItem()
		.icon(Palette)
		.title('Bilder')
		.child(
			S.list()
				.title('Bilder')
				.items([
					S.listItem()
						.title('Bilder')
						.icon(Palette)
						.child(
							S.documentList('bild')
								.title('Meine Bilder')
								.schemaType('bild')
								.filter('_type == "bild"')
						)
				])
		);
}

export default bilderStructure;
