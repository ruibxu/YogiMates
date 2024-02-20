import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import 'react-native-gesture-handler';
import { theme } from '../theme';
import Home from './Home';
import Class from './Class';
import Analysis from './Analysis';
import Profile from './Profile';


const Tab = createBottomTabNavigator();

const HomeSection = () => {
    return (
        <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarStyle: {
            backgroundColor: theme.colors.card,
            borderTopWidth: 0,
          },
          headerStyle: {
            backgroundColor: theme.colors.background,
          },
          headerShadowVisible: false,
          tabBarActiveTintColor: theme.colors.activeText,
          headerTitleAlign: 'center',
          tabBarLabelStyle: {
            fontSize: 20, // Change this to your desired font size
          },
          
        })}
      >

        <Tab.Screen 
          name="HOME" 
          component={Home}
        />

        <Tab.Screen 
          name="CLASS" 
          component={Class}
        />

        <Tab.Screen 
          name="ANALYSIS" 
          component={Analysis}
        />

        <Tab.Screen 
          name="PROFILE" 
          component={Profile}
        />

      </Tab.Navigator>
    )
}

export default HomeSection;