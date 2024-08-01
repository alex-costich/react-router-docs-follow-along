import { getContact } from '../../contacts'

export const contactLoader = async ({ params }) => {
	const contact = await getContact(params.contactId)
	if (!contact) {
		throw new Response('', {
			status: 404,
			statusText: 'Not Found'
		})
	}
	/*
	Whenever you have an expected error case in a loader or action–like the data not existing–you can throw.
	The call stack will break, React Router will catch it, and the error path is rendered instead. We won't
	even try to render a null contact.
	*/
	return { contact } // Response to request: returns contact
}
