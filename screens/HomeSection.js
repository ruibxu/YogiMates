import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import 'react-native-gesture-handler';
import { theme } from '../theme';
import Home from './Home';
import Class from './Class';
import Analysis from './Analysis';
import Profile from './Profile';
import { View, Platform} from 'react-native';
import { TabBarIcon } from '../components/TabBarIcon';

const Tab = createBottomTabNavigator();

const HomeSection = ({navigation}) => {
    return (
        <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarStyle: {
            backgroundColor: theme.colors.card_light_green,
            borderTopWidth: 0,
            height: 85,
            // Android shadow
            elevation: 5,
            // iOS shadow
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
          },
          headerStyle: {
            backgroundColor: theme.colors.background,
          },
          headerShadowVisible: false,
          tabBarActiveTintColor: theme.colors.activeText,
          tabBarInactiveTintColor: theme.colors.iconBackground,
          headerTitleAlign: 'center',
          tabBarLabelStyle: {
            fontSize: Platform.OS === 'ios' ? 10 : 14, 
            marginBottom: Platform.OS === 'ios' ? 0 : 5, 
          },
          tabBarIcon: ({ focused }) => <TabBarIcon name={route.name} focused={focused} />,
          
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