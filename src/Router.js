import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react'
import Browse from './pages/browse/Browse';
import Login from './pages/login/Login';
import Podcast from './pages/podcast/Podcast';

const Stack = createNativeStackNavigator();

export default function Router() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name='Login'
          component={Login}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
         name='Browse'
          component={Browse}
           options={{
            headerShown: false
          }}/>
          <Stack.Screen
         name='Podcast'
          component={Podcast}
           options={{
            headerShown: false
          }}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}