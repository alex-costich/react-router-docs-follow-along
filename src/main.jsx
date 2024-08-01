import * as React from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ErrorPage from './ErrorPage'
import Contact from './routes/contact/Contact'
import { contactAction } from './routes/contact/contactAction'
import { contactLoader } from './routes/contact/contactLoader'
import { destroyAction } from './routes/destroy-contact/destroyContact'
import EditContact from './routes/edit-contact/Edit'
import { editAction } from './routes/edit-contact/editAction'
import Index from './routes/index/Index'
import Root from './routes/root/Root'
import { rootAction } from './routes/root/rootAction'
import { rootLoader } from './routes/root/rootLoader'
import './styles/index.css'

const router = createBrowserRouter([
	// Root route
	{
		path: '/', // Root path
		element: <Root />, // Root component
		errorElement: <ErrorPage />, // Error component
		loader: rootLoader,
		action: rootAction,
		children: [
			/*
                Whatever components are added as children will render
                inside the parent component (in this case, Root).
            */
			{ index: true, element: <Index /> },
			/*
				index tells the router to match and render this route when the user
				is at the parent route's exact path
			*/
			{
				path: 'contacts/:contactId', // :contactId is the dynamic segment, and will be accessed through URL Params
				element: <Contact />,
				loader: contactLoader,
				action: contactAction
			},
			{
				path: 'contacts/:contactId/edit',
				element: <EditContact />,
				loader: contactLoader, // Loaders should not be shared between routes, we're just being lazy
				action: editAction
			},
			{
				path: 'contacts/:contactId/destroy',
				errorElement: <div>Oops! There was an error.</div>,
				action: destroyAction
			}
		]
	}
])

const container = document.getElementById('root')

createRoot(container).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
)
