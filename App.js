import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import IndexScreen from './src/screens/IndexScreen';
import { Provider } from './src/context/BlogContext';
import ShowScreen from './src/screens/ShowScreen';
import CreateScreen from './src/screens/CreateScreen';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { AntDesign } from '@expo/vector-icons';
import { Button } from 'react-native';
import EditScreen from './src/screens/EditScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='Index'
        screenOptions={{ gestureEnabled: false }}
      >
        <Stack.Screen
          name='Index'
          component={IndexScreen}
          options={{ title: 'Blog Title' }}
        />
        <Stack.Screen
          name='Show'
          component={ShowScreen}
          options={{ title: 'Show' }}
        />
        <Stack.Screen
          name='Create'
          component={CreateScreen}
          options={{ title: 'Create' }}
        />
        <Stack.Screen
          name='Edit'
          component={EditScreen}
          options={{ title: 'Edit' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default () => {
  return (
    <Provider>
      <App />
    </Provider>
  );
};
