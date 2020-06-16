import { useState, useContext, useEffect } from 'react'

import {
	requestPermissionsAsync,
	watchPositionAsync,
	Accuracy
} from 'expo-location'

import { Context as LocationContext } from '../context/LocationContext'

export default (isFocused) => {
	const {
		state: { recording },
		addLocation,
		startRecording,
		stopRecording
	} = useContext(LocationContext)

    const [err, setErr] = useState(null)
    const [subscriber, setSubscriber] = useState(null)
    
    useEffect(() => {
        if(isFocused){
            startWatching()
        } else {
            stopWatching()
        }
	}, [isFocused])

	const startWatching = async () => {
		const permissionResponse = await requestPermissionsAsync()
        setErr(permissionResponse.granted)
        startRecording()
		if (permissionResponse.granted) {
			const subscriber = await watchPositionAsync(
				{
					accuracy: Accuracy.BestForNavigation,
					timeInterval: 1000,
					distanceInterval: 10
				},
				location => {
					addLocation(location)
				}
            )
            setSubscriber(subscriber)
		} else {
            console.log('You must have permissions enabled!')
        }
		console.log(permissionResponse)
	}

	const stopWatching = () => {
		subscriber.remove()
        stopRecording()
        setSubscriber(null)
	}

	return { err, recording, startWatching, stopWatching }
}
