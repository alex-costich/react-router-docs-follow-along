import { Form } from 'react-router-dom'
import Favorite from './Favorite'

const Contact = () => {
	const contact = {
		first: 'Your',
		last: 'Name',
		avatar: 'https://robohash.org/you.png?size=200x200',
		twitter: 'your_handle',
		notes: 'Some notes',
		favorite: true
	}

	return (
		<div id='contact'>
			<div>
				<img
					key={contact.avatar}
					src={
						contact.avatar ||
						`https://robohash.org/${contact.id}.png?size=200x200`
					}
				/>
			</div>

			<div>
				<h1>
					{contact.first || contact.last ? (
						<>
							{contact.first} {contact.last}
						</>
					) : (
						<i>No Name</i>
					)}{' '}
					<Favorite favorite={contact.favorite} />
				</h1>

				{contact.twitter && (
					<p>
						<a target='_blank' href={`https://twitter.com/${contact.twitter}`}>
							{contact.twitter}
						</a>
					</p>
				)}

				{contact.notes && <p>{contact.notes}</p>}

				<div>
					<Form action='edit'>
						<button type='submit'>Edit</button>
					</Form>
					<Form
						method='post'
						action='destroy'
						onSubmit={event => {
							if (!confirm('Please confirm you want to delete this record.')) {
								event.preventDefault()
							}
						}}
					>
						<button type='submit'>Delete</button>
					</Form>
				</div>
			</div>
		</div>
	)
}

export default Contact