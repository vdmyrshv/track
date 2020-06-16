import '../_mockLocation' //import module for side effects only

import React from 'react'
import { StyleSheet, View } from 'react-native'
import Map from '../components/Map'
import { Text, Button } from 'react-native-elements'

import { SafeAreaView, withNavigationFocus } from 'react-navigation'

import useLocation from '../hooks/useLocation'

const TrackCreateScreen = ({ isFocused }) => {
	const { err, recording, startWatching, stopWatching } = useLocation(
		isFocused
	)
	console.log(recording)

	return (
		<SafeAreaView forceInset={{ top: 'always' }}>
			<Text h2>create a track</Text>
			<Map />
			<Button
                buttonStyle={{backgroundColor: recording ? "red" : "green"}}
				title={`${recording ? 'Stop' : 'Start'} Recording`}
				onPress={() => {
					recording ? stopWatching() : startWatching()
				}}
			/>
			{!err && <Text>Please enable location services</Text>}
		</SafeAreaView>
	)
}

export default withNavigationFocus(TrackCreateScreen)

const styles = StyleSheet.create({})
