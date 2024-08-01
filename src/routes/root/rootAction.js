import { redirect } from 'react-router-dom'
import { createContact } from '../../contacts'

export const rootAction = async () => {
	const contact = await createContact()
	return redirect(`/contacts/${contact.id}/edit`) // response to request
}
