import React from 'react'

import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { createBottomTabNavigator } from 'react-navigation-tabs'

import { setNavigator } from './src/navigationRef'

import { Provider as AuthProvider } from './src/context/AuthContext'

import { Provider as LocationProvider } from './src/context/LocationContext'

import { Provider as TrackProvider } from './src/context/TrackContext'

import SignupScreen from './src/screens/SignupScreen'
import SigninScreen from './src/screens/SigninScreen'
import TrackCreateScreen from './src/screens/TrackCreateScreen'
import AccountScreen from './src/screens/AccountScreen'
import TrackListScreen from './src/screens/TrackListScreen'
import TrackDetailScreen from './src/screens/TrackDetailScreen'
import ResolveAuthScreen from './src/screens/ResolveAuthScreen'

import { FontAwesome5 } from '@expo/vector-icons';

const trackListFlow = createStackNavigator({
	TrackList: TrackListScreen,
	TrackDetail: TrackDetailScreen
})

const tabBarIcon = () => ( <FontAwesome5 name="list" size={24} color="black" /> )

trackListFlow.navigationOptions = {
	title: 'Track List',
	tabBarIcon
}

const switchNavigator = createSwitchNavigator({
	ResolveAuth: ResolveAuthScreen,
	loginFlow: createStackNavigator({
		Signup: SignupScreen,
		Signin: SigninScreen
	}),
	mainFlow: createBottomTabNavigator({
		trackListFlow,
		TrackCreate: TrackCreateScreen,
		Account: AccountScreen
	})
})

const App = createAppContainer(switchNavigator)

export default () => (
	<TrackProvider>
		<LocationProvider>
			<AuthProvider>
				<App ref={setNavigator} />
			</AuthProvider>
		</LocationProvider>
	</TrackProvider>
)
