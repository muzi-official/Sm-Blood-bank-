import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './HomeScreen';
import SplashScreen from './SplashScreen';
import SignInScreen from './SignInScreen';
import SignUpScreen from './SignUpScreen';
import DetailsScreen from './DetailsScreen';
import SupportScreen from './SupportScreen';
import SettingsScreen from './SettingsScreen';
import BloodDonorsScreen from './BloodDonorsScreen'
const RootStack = createStackNavigator();

const RootStackScreen = ({ navigation }) => (
    <RootStack.Navigator headerMode='none'>
        <RootStack.Screen name="SplashScreen" component={SplashScreen} />
        <RootStack.Screen name="SignInScreen" component={SignInScreen} />
        <RootStack.Screen name="SignUpScreen" component={SignUpScreen} />
        <RootStack.Screen name="HomeScreen" component={HomeScreen} />
        <RootStack.Screen name="SettingsScreen" component={SettingsScreen} />
        <RootStack.Screen name="SupportScreen" component={SupportScreen} />
        <RootStack.Screen name="BloodDonorsScreen" component={BloodDonorsScreen} />
        <RootStack.Screen name="DetailsScreen" component={DetailsScreen} />

    </RootStack.Navigator>
);

export default RootStackScreen;