import { getContacts } from '../../contacts'

export const rootLoader = async () => {
	const contacts = await getContacts()
	return { contacts }
}
