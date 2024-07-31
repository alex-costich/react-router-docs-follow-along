import * as React from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ErrorPage from './ErrorPage'
import Contact from './routes/Contact'
import Root from './routes/Root'
import './styles/index.css'

const router = createBrowserRouter([
	// Root route
	{
		path: '/', // Root path
		element: <Root />, // Root component
		errorElement: <ErrorPage />, // Error component
		children: [
			/*
                Whatever components are added as children will render
                inside the parent component (in this case, Root).
            */
			{
				path: 'contacts/:contactId',
				element: <Contact />
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
