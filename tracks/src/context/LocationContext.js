import createDataContext from './createDataContext'

const locationReducer = (state, action) => {
	switch (action.type) {
		case 'add_current_location':
			return {
				...state,
				locations: [
					...state.locations,
					{
						latitude: action.payload.coords.latitude,
						longitude: action.payload.coords.longitude
					}
				],
				currentLocation: action.payload
			}
		case 'start_recording':
			return {
				...state,
				recording: true
			}
		case 'stop_recording':
			return {
				...state,
				recording: false
			}
		default:
			return state
	}
}

const actions = {
	startRecording: dispatch => () => {
		dispatch({ type: 'start_recording', payload: true })
	},
	stopRecording: dispatch => () => {
		dispatch({ type: 'stop_recording', payload: false })
	},
	addLocation: dispatch => location => {
        console.log("hi there!")
		dispatch({ type: 'add_current_location', payload: location })
	}
}

export const { Context, Provider } = createDataContext(
	locationReducer,
	{ ...actions },
	{
		recording: false,
		locations: [],
		currentLocation: null
	}
)
