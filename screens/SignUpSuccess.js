import React from 'react';
import { View, Text, Button, TouchableOpacity} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { theme } from '../theme';
import {SafeAreaView} from 'react-native-safe-area-context';

const SignUpSuccess = ({navigation}) => {
  return (
    <SafeAreaView style={{ alignItems: 'center', justifyContent: 'center', flex: 1, }}>
      <Ionicons name="checkmark-circle-outline" size={150}  style={{color:theme.colors.secondary}}/>
      <Text style={{ fontSize: 24, marginVertical: 20, color:theme.colors.secondary, fontWeight: 'bold'}}>Your Account is Created</Text>
      <Text style={{ fontSize: 18, marginBottom: 40, color:theme.colors.secondary, fontWeight: 'bold' }}>Thanks for Your Registration</Text>
      
      <TouchableOpacity style={{ backgroundColor: theme.colors.card_light_orange, padding: 10, borderRadius: 50, 
      width: 200, alignItems: 'center', borderColor: theme.colors.secondary, borderWidth: 1, marginTop: 100
     }} onPress={() => navigation.navigate('HomeSection')}>
        <Text style={{ color: theme.colors.text, fontSize: 25, color:theme.colors.secondary }}>Done</Text>    
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default SignUpSuccess;
