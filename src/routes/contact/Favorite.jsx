import { useFetcher } from 'react-router-dom'

const Favorite = ({ favorite }) => {
	const fetcher = useFetcher()

	const isFavorite = fetcher.formData
		? fetcher.formData.get('favorite') === 'true'
		: favorite

	/* 
	Use fetcher hook allows us to communicate with loaders and actions without causing a navigation.

	The fetcher knows the form data being submitted to the action, so it's available to you on fetcher.formData.
	This is used to immediately update the star's state, even though the network hasn't finished.
	If the update eventually fails, the UI will revert to the real data.
	*/

	return (
		<fetcher.Form method='post'>
			<button
				name='favorite'
				value={isFavorite ? 'false' : 'true'}
				aria-label={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
			>
				{isFavorite ? '★' : '☆'}
			</button>
		</fetcher.Form>
	)
}

export default Favorite
