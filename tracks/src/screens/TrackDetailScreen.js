import React, { useContext } from 'react'
import { StyleSheet, Text, View } from 'react-native'

import {
	widthPercentageToDP as wp,
	heightPercentageToDP as hp
} from 'react-native-responsive-screen'

import MapView, { Polyline } from 'react-native-maps'

import { Context as TrackContext } from '../context/TrackContext'

const TrackDetailScreen = ({ navigation }) => {
	const _id = navigation.getParam('_id')

	const { state } = useContext(TrackContext)

	const track = state.find(track => track._id === _id)

	return (
		<View>
			<Text>{track.name}</Text>
			<MapView
				style={styles.mapStyle}
				initialRegion={{
					...track.locations[Math.floor(track.locations.length/2)].coords,
					latitudeDelta: 0.01,
					longitudeDelta: 0.01
				}}
				region={{
					...track.locations[0].coords,
					latitudeDelta: 0.01,
					longitudeDelta: 0.01
				}}
			>
				{/* to have the screen track location use the region prop and copy in the initialRegion object in hte MapView opening tag */}
				<Polyline
					coordinates={track.locations.map(location => ({
						latitude: location.coords.latitude,
						longitude: location.coords.longitude
					}))}
					strokeWidth={2}
					strokeColor='orange'
				/>
			</MapView>
		</View>
	)
}

export default TrackDetailScreen

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
