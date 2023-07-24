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
						),
					S.divider(),
					S.listItem()
						.title('Informationen')
						.icon(Info)
						.child(
							S.documentList('content')
								.title('Meine Texte')
								.schemaType('content')
								.filter('_type == "content"')
						)
				])
		);
}

export default bilderStructure;
