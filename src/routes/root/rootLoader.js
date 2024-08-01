import { getContacts } from '../../contacts'

export const rootLoader = async ({ request }) => {
	const url = new URL(request.url)
	const q = url.searchParams.get('q')
	const contacts = await getContacts(q)
	return { contacts, q } // response to request
}
