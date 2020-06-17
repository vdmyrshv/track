import React, { useEffect, useContext } from 'react'

import {
	StyleSheet,
	Text,
	Button,
	FlatList,
	TouchableOpacity
} from 'react-native'

import { ListItem } from 'react-native-elements'

import { SafeAreaView } from 'react-navigation'

import Spacer from '../components/Spacer'

import { Context as TrackContext } from '../context/TrackContext'

const TrackListScreen = ({ navigation }) => {
	const { state, fetchTracks } = useContext(TrackContext)

	useEffect(() => {
		fetchTracks()
	}, [])

	return (
		<SafeAreaView forceInset={{ top: 'always' }}>
			<Spacer />
			<FlatList
				data={state}
				keyExtractor={track => track._id}
				renderItem={({ item }) => (
					<TouchableOpacity
						onPress={() =>
							navigation.navigate('TrackDetail', {
								_id: item._id
							})
						}
					>
						<ListItem chevron title={item.name} />
					</TouchableOpacity>
				)}
			/>
			<Button
				title='go to track detail'
				onPress={() => navigation.navigate('TrackDetail')}
			/>
		</SafeAreaView>
	)
}


export default TrackListScreen

TrackListScreen.navigationOptions = {
    headerShown: false,

}

const styles = StyleSheet.create({})
