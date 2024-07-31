import { createContact } from '../../contacts'

export const rootAction = async () => {
	const contact = await createContact()
	return { contact }
}
