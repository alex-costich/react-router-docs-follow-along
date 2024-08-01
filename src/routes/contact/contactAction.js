import { updateContact } from '../../contacts'

export const contactAction = async ({ request, params }) => {
	const formData = await request.formData()
	return updateContact(params.contactId, {
		favorite: formData.get('favorite') === 'true'
	})
}
