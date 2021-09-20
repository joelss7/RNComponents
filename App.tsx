import 'react-native-gesture-handler';
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { Text } from 'react-native';
import { Navigation } from './src/navigation/Navigation';


export const App = () => {


  return (
    <NavigationContainer>
      {/* Rest of your app code */}

      <Navigation />
    </NavigationContainer>

  )
}


export default App;
