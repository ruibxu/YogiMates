import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { StyleSheet, Text, View, TextInput, SafeAreaView} from 'react-native';
import { NavigationContainer ,} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { theme } from './theme';
import 'react-native-gesture-handler';
import HomeSection from './screens/HomeSection';


//create a stack navigator
const Stack = createStackNavigator();

export default function App() {


  return (
    // react navigation container
      <NavigationContainer theme={theme}>
        <StatusBar style="auto" />
        <Stack.Navigator
          screenOptions={({route}) => ({
            headerStyle: {
              backgroundColor: theme.colors.card,
            },
            headerTitleAlign: 'center',
          })}
        >
          <Stack.Screen 
            name="HomeSection" 
            component={HomeSection}  
            options={{ 
              headerShown: false,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
  );
}

