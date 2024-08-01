import { getContacts } from '../../contacts'

export const rootLoader = async ({ request }) => {
	console.log(request)
	const url = new URL(request.url) // Creates URL type object from request url
	const q = url.searchParams.get('q')
	/* 
	Retrieves the value of the query parameter named 'q'
	from the URL. Query parameters are preceded by an interrogation mark (?)

	For example, here: http://localhost:5173/?q=this+is+a+typed+input
	The q const would be "this is a typed input"
	*/
	const contacts = await getContacts(q) // Looks for contacts named 'q'
	return { contacts, q } // Response to request: matching contacts, query
}
