import { redirect } from 'react-router-dom'
import { updateContact } from '../../contacts'

export const editAction = async ({ request, params }) => {
	const formData = await request.formData()
	const updates = Object.fromEntries(formData)
	await updateContact(params.contactId, updates)
	return redirect(`/contacts/${params.contactId}`)
}
