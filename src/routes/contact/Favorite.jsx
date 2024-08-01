import { useFetcher } from 'react-router-dom'

const Favorite = ({ favorite }) => {
	const fetcher = useFetcher()
	/* Use fetcher hook allows us to communicate with loaders and actions without causing a navigation. */

	return (
		<fetcher.Form method='post'>
			<button
				name='favorite'
				value={favorite ? 'false' : 'true'}
				aria-label={favorite ? 'Remove from favorites' : 'Add to favorites'}
			>
				{favorite ? '★' : '☆'}
			</button>
		</fetcher.Form>
	)
}

export default Favorite
