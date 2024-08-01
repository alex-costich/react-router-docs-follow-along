import { useEffect } from 'react'
import {
	Form,
	NavLink,
	Outlet,
	useLoaderData,
	useNavigation,
	useSubmit
} from 'react-router-dom'

const Root = () => {
	const { contacts, q } = useLoaderData()
	const navigation = useNavigation()
	const submit = useSubmit()
	/*
		useNavigation returns current navigation state ('idle'/'submitting'/'loading') 
		through these states we can manipulate the component, add loading circles, fades,
		etc.
	*/

	useEffect(() => {
		document.getElementById('q').value = q
	}, [q])

	return (
		<>
			<div id='sidebar'>
				<h1>React Router Contacts</h1>
				<div>
					<Form id='search-form' role='search'>
						<input
							id='q'
							aria-label='Search contacts'
							placeholder='Search'
							type='search'
							name='q'
							defaultValue={q}
							onChange={e => {
								submit(e.currentTarget.form)
							}}
						/>
						{/* 
							Because this is a GET, not a POST, React Router does not call the action. Submitting a GET
							form is the same as clicking a link: only the URL changes. That's why the code we added for
							filtering is in the loader, not the action of this route.
						*/}
						<div id='search-spinner' aria-hidden hidden={true} />
						<div className='sr-only' aria-live='polite'></div>
					</Form>
					<Form method='post'>
						<button type='submit'>New</button>
						{/*
							Because we're using Form and not form,
							it will submit through this component's
							corresponding route's action.
						*/}
					</Form>
				</div>
				<nav>
					{contacts.length ? (
						<ul>
							{contacts.map(contact => (
								<li key={contact.id}>
									<NavLink
										to={`contacts/${contact.id}`}
										className={({ isActive, isPending }) =>
											isActive ? 'active' : isPending ? 'pending' : ''
										}
									>
										{contact.first || contact.last ? (
											<>
												{contact.first} {contact.last}
											</>
										) : (
											<i>No Name</i>
										)}{' '}
										{contact.favorite && <span>★</span>}
									</NavLink>
								</li>
							))}
						</ul>
					) : (
						<p>
							<i>No contacts</i>
						</p>
					)}
				</nav>
			</div>
			<div
				id='detail'
				className={navigation.state === 'loading' ? 'loading' : ''}
			>
				<Outlet /> {/* Child route components will be rendered here */}
			</div>
		</>
	)
}

export default Root
