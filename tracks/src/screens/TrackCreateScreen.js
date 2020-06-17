import '../_mockLocation' //import module for side effects only

import React from 'react'
import { StyleSheet, View } from 'react-native'
import Map from '../components/Map'
import { Text, Button } from 'react-native-elements'

import { SafeAreaView, withNavigationFocus } from 'react-navigation'

import TrackForm from '../components/TrackForm'

import { FontAwesome5 } from '@expo/vector-icons';

const TrackCreateScreen = ({ isFocused }) => {
	

	return (
		<SafeAreaView forceInset={{ top: 'always' }}>
			<Text h2>create a track</Text>
			<Map />
			<TrackForm isFocused={isFocused}/>
		</SafeAreaView>
	)
}

const tabBarIcon = () => ( <FontAwesome5 name="map-marked" size={24} color="black" />)

TrackCreateScreen.navigationOptions={
	title: 'Add Track', 
	tabBarIcon
}

export default withNavigationFocus(TrackCreateScreen)

const styles = StyleSheet.create({})
