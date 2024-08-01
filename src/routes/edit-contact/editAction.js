import { redirect } from 'react-router-dom'
import { updateContact } from '../../contacts'

export const editAction = async ({ request, params }) => {
	const formData = await request.formData()
	/* 
	Without JS, formData is created and sent in the request when a form is submitted.
	Because we are using Forms and not forms, they are sent to the route's action instead.
	*/
	const updates = Object.fromEntries(formData) // Collects all form fields into one object
	/* 
	They can also be accessed individually using formData.get(name)
	Or through updates.name
	*/
	await updateContact(params.contactId, updates)
	return redirect(`/contacts/${params.contactId}`) // response to request
}

/*
Aside from action, none of these APIs are provided by React Router: request,
request.formData, Object.fromEntries are all provided by the web platform. 
*/
