import React, { useContext } from 'react'
import { StyleSheet, View } from 'react-native'
import { Input, Button, Text } from 'react-native-elements'

import Spacer from './Spacer'

import useLocation from '../hooks/useLocation'
import useSaveTrack from '../hooks/useSaveTrack'

import { Context as LocationContext } from '../context/LocationContext'

const TrackForm = ({ isFocused }) => {
	const {
		state: { name, recording, locations },
		changeName,
		clearLocations
	} = useContext(LocationContext)

	const [saveTrack] = useSaveTrack()

	const { err, startWatching, stopWatching } = useLocation(
		isFocused || recording
	)

	console.log(locations.length)
	console.log('rendered')

	return (
		<>
			<Spacer>
				<Input
					placeholder='Enter name'
					value={name}
					onChangeText={changeName}
				/>
			</Spacer>
			<Button
				buttonStyle={{ backgroundColor: recording ? 'red' : 'green' }}
				title={`${recording ? 'Stop' : 'Start'} Recording`}
				onPress={() => {
					recording ? stopWatching() : startWatching()
				}}
			/>
			{!recording && !!locations.length && (
				<>
					<Spacer />
					<Button
						buttonStyle={{ backgroundColor: 'darkcyan' }}
						title='Save Track'
						onPress={saveTrack}
					/>
					<Spacer />
					<Button
						buttonStyle={{
							backgroundColor: 'greenyellow'
						}}
						titleStyle={{
							color: 'darkorange'
						}}
						title='Clear Track'
						onPress={clearLocations}
					/>
				</>
			)}
			{!err && <Text>Please enable location services</Text>}
		</>
	)
}

export default TrackForm

const styles = StyleSheet.create({})
