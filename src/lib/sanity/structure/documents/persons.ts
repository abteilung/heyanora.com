import { User, UsersThree, UserCircle } from '@phosphor-icons/react';

export function personsStructure(S) {
	return S.listItem()
		.icon(User)
		.title('Über mich')
		.child(
			S.documentList('author').title('Über mich').schemaType('author').filter('_type == "author"')
		);
}

export default personsStructure;
