# First Steps: React Router

## Index

- [Router instance creation](#router-instance-creation)

## What is a router?

A router is a tool for managing navigation and rendering components based on the URL in a web application.

## Router instance creation

```jsx
import stuff

const router = createBrowserRouter([
	// Root route
	{
		path: '/', // Root path
		element: <Root />, // Root component
		errorElement: <ErrorPage /> // Error component
		/* All is pretty self explanatory */
	}
])
const container = document.getElementById('root')

createRoot(container).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
)
```

A basic route consists of two essential properties: a _path_ and an _element_, which indicates the content the router should render when a specific path is matched.

The `RouterProvider` functions as an outlet for all routes assigned to it as a `createBrowserRouter` object via the `router` prop.

Optional properties, such as can also be set for certain events:

- [children](#children-and-outlet) for nested routes
- [errorElement](#router-instance-creation) for errors
- [loader](#loader) for data fetching

## children and Outlet

```jsx
const router = createBrowserRouter([
	// Root route
	{
		path: '/', // Root path
		element: <Root />, // Root component
		errorElement: <ErrorPage />, // Error component
		children: [
			{
				path: 'contacts/:contactId',
				element: <Contact />
			}
		]
	}
])
```

The property `children` lets us define nested routes within a parent route, which allows rendering of components inside of components.

```jsx
import { Outlet } from 'react-router-dom'

function Root() {
	return (
		<div>
			<h1>Welcome to the App</h1>
			<Outlet /> {/* Renders nested route components here */}
		</div>
	)
}
```

The `Outlet` component should be placed inside of the parent component, and will act as a placeholder for nested routes. Child route components will be rendered in its spot.
