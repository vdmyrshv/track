import createDataContext from './createDataContext'

const locationReducer = (state, action) => {
	switch (action.type) {
		case 'add_current_location':
			return {
				...state,
				currentLocation: action.payload
			}
		case 'add_location':
			return {
				...state,
				locations: [...state.locations, { ...action.payload }]
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
		case 'change_name':
			return { ...state, name: action.payload }
		case 'clear_locations':
			return {...state, locations: [], name: ''}
		default:
			return state
	}
}

const locationActions = {
	changeName: dispatch => name => {
		dispatch({ type: 'change_name', payload: name })
	},
	clearName: dispatch => () => {
		dispatch({ type: 'change_name', payload: '' })
	},
	startRecording: dispatch => () => {
		dispatch({ type: 'start_recording' })
	},
	stopRecording: dispatch => () => {
		dispatch({ type: 'stop_recording' })
	},
	addLocation: dispatch => (location, recording) => {
		dispatch({ type: 'add_current_location', payload: location })
		console.log('tracking')
		if (recording) {
			dispatch({ type: 'add_location', payload: location })
			console.log('recording')
		}
	},
	clearLocations: dispatch => () => {
		dispatch({type: 'clear_locations'})
	}
}

export const { Context, Provider } = createDataContext(
	locationReducer,
	{ ...locationActions },
	{
		recording: false,
		locations: [],
		currentLocation: null,
		name: ''
	}
)
