import createDataContext from './createDataContext'

import trackerAPI from '../api/tracker'

const trackReducer = (state, action) => {
	switch (action.type) {
        case 'set_tracks':
            return action.payload
		default:
			return state
	}
}

const trackActions = {
	fetchTracks: dispatch => async () => {
        const {data} = await trackerAPI.get('/tracks')
        dispatch({type: 'set_tracks', payload: data})
    },
	createTrack: dispatch => async ({ name, locations }) => {
		await trackerAPI.post('/tracks', {
			name,
			locations
		})
	}
}

export const { Context, Provider } = createDataContext(
	trackReducer,
	{ ...trackActions },
	[]
)
