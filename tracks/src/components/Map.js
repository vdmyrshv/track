import React, { useState, useEffect, useContext } from 'react'
import { StyleSheet, View, ActivityIndicator } from 'react-native'
import { Text } from 'react-native-elements'

import MapView, { Polyline, Circle } from 'react-native-maps'

import { Context as LocationContext } from '../context/LocationContext'

import {
	widthPercentageToDP as wp,
	heightPercentageToDP as hp
} from 'react-native-responsive-screen'

const Map = () => {
	const {
		state: { currentLocation, locations }
	} = useContext(LocationContext)

	//const [points, setPoints] = useState([])

	// //mock point function for testing a line
	// const genPoints = () => {
	// 	const arr = []
	// 	let latitude = 45.508888
	// 	let longitude = -73.561668

	// 	for (let i = 0; i < 20; i++) {
	// 		arr.push({ latitude, longitude })

	// 		latitude += Math.random() * 0.02 - 0.01
	// 		longitude -= Math.random() * 0.02
	// 	}
	// 	setPoints([...arr])
	// }

	return (
		<>
			{!currentLocation ? (
				<ActivityIndicator
					style={styles.spinnerStyle}
					size='large'
					color='darkcyan'
				/>
			) : (
				<MapView
					style={styles.mapStyle}
					initialRegion={{
						...currentLocation.coords,
						latitudeDelta: 0.01,
						longitudeDelta: 0.01
					}}
				>
					{/* to have the screen track location use the region prop and copy in the initialRegion object in hte MapView opening tag */}
					<Polyline
						coordinates={locations.map(location => ({
							latitude: location.coords.latitude,
							longitude: location.coords.longitude
						}))}
						strokeWidth={2}
						strokeColor='orange'
					/>
					<Circle
						center={currentLocation.coords}
						radius={40}
						strokeColor='rgba(186, 237, 47, .7)'
						strokeWidth={3}
						fillColor='rgba(237, 196, 47, .7)'
					/>
				</MapView>
			)}
		</>
	)
}

export default Map

const styles = StyleSheet.create({
	mapStyle: {
		height: 300,
		width: wp('100%')
	},
	spinnerStyle: {
		flex: 1,
		marginTop: 200
	}
})
