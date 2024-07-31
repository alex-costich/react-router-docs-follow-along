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

A basic route consists of two essential properties: a **path** and an **element**, both of them work together to indicate what content the router should render when under a specific path.

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

## Client side routing

It allows our app to update the URL without requesting another document from the server. The app can instead render the new UI immediately.

We have a couple of special components to help us achieve this:

- `<Link>`, used to navigate between different routes. It renders an anchor (`<a>`) element that when clicked, **changes the URL without reloading the page**.

- `<NavLink>`, a specialized version of `Link` that adds styling capabilities based on the active state of the link.

## Loading data

URL segments, layouts and data are more often than not coupled together.

- `/` | `contacts/:id`

Because of this natural coupling, React Router has data conventions to get data into components easily. There are two APIs that are used to load data:

- `Loader`, a function that is built to retrieve the data and is assigned to the `loader` property of the route.

```jsx
import { getContacts } from '../../contacts'

export const rootLoader = async () => {
	const contacts = await getContacts()
	return { contacts }
}
```

```jsx
import { rootLoader } from './routes/Root/rootLoader'

const router = createBrowserRouter([
	{
		path: '/',
		element: <Root />,
		// more properties
		loader: rootLoader
	}
])
```

- `UseLoaderData`, a function that retrieves that data and is used inside the component.

```jsx
import { Form, Link, Outlet, useLoaderData } from 'react-router-dom'

const Root = () => {
	const { contacts } = useLoaderData()
	return(
		//code
	)
}
```

## Data writes and updates

HTML forms cause a navigation in the browser, just like clicking a link. The only difference is in the request, as links can only change the URL, while forms can change the request method (GET/POST), as well as the request body (POST form data).

Without client side routing, both of these requests would be sent to the server.

React Router enables us to do these things using client side routing, and sends it to a route `action`.

```jsx
import { createContact } from '../../contacts'

export const rootAction = async () => {
	const contact = await createContact()
	return { contact }
}
```

```jsx
import { rootAction } from './routes/Root/rootAction'

const router = createBrowserRouter([
	{
		path: '/',
		element: <Root />,
		// more properties
		action: rootAction
	}
])
```

Whatever `form` we were using to handle the date, should be turned into a React Router `Form`, which works the same, but prevents the browser from sending the request to the serve and instead sends POST and GET requests to the route's **action**.

**Essentially what we're doing with this is help our app handle form submissions without causing a full page reload.**

React Router also revalidates the data on the page after a `Form` action finishes, which enables all `useLoaderData` hooks to update, and as such keeps UI in sync with data.

`Form` components are also used to update data.

## URL Params in Loaders

```jsx
{
path: 'contacts/:contactId',
element: <Contact />
}
```

The colon `:` denotes a **dynamic segment**, which will match changing values in that position of the URL. These values are called "URL Params" or `params` for short.

These are passed to the loader with keys that match the dynamic segment. In this example, it would be passed as `params.contactId`.

They are most often used to find a record by id.

# I honestly stopped writing notes here because I realized I'm just rewriting the React Router docs, so check those out from here on, it's pretty much the same.
