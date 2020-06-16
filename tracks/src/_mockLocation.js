import * as Location from 'expo-location'

const tenMetersWithDegrees = 0.0001

const getLocation = increment => ({
	timeStamp: 100000000,
	coords: {
		speed: 0,
		heading: 0,
		accuracy: 5,
		altitudeAccuracy: 5,
		altitude: 5,
		longitude: -73.561668 + increment * tenMetersWithDegrees,
		latitude: 45.508888 + increment * tenMetersWithDegrees
	}
})

let counter = 0

const mockLocation = setInterval(() => {
	Location.EventEmitter.emit('Expo.locationChanged', {
		watchId: Location._getCurrentWatchId(),
		location: getLocation(counter)
	})
	counter++
}, 1000)

// const stopInterval = () => clearInterval(mockLocation)

// stopInterval()