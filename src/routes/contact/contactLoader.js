import { getContact } from '../../contacts'

export const contactLoader = async ({ params }) => {
	const contact = await getContact(params.contactId)
	return { contact }
}
