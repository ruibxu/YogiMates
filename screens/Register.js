import React,{useState,useEffect} from 'react';
import { View, Text, TextInput, TouchableOpacity,TouchableWithoutFeedback,Keyboard,ScrollView} from 'react-native';
import Checkbox from 'expo-checkbox';
import {SafeAreaView} from 'react-native-safe-area-context';
import { theme } from '../theme';
import { FontAwesome } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';

const Register = ({ navigation }) =>{
    const [isChecked, setChecked] = useState(false);
    const [hidePassword, setHidePassword] = useState(true);
    const [hideConfirmPassword, setHideConfirmPassword] = useState(true);
    

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style = {{flex:1}}>
        <SafeAreaView edges={["top"]} style={{ flex:0, backgroundColor: theme.colors.background }} />
        <SafeAreaView edges={["left", "right", "bottom"]} style={styles.container}>
          <View style={{backgroundColor: theme.colors.background, flex: 1}}>
            <ScrollView style={styles.mainContent} keyboardShouldPersistTaps='handled'>
                <Text style={styles.title}>Create account!</Text>
                
                <View style={styles.inputContainer}>
                  <View style={{ width: 20 }}>
                    <FontAwesome name="user-circle-o" size={20} color={theme.colors.card_grey} />
                  </View>
                  <View style={{ flex:1, alignItems: 'stretch'}}>
                    <TextInput placeholder="Name" style={{ flex: 1, marginLeft: 10, fontSize:15}} autoCapitalize="none"/>
                  </View>
                </View>

                <View style={styles.inputContainer}>
                  <View style={{ width: 20 }}>
                    <FontAwesome name="envelope" size={20} color={theme.colors.card_grey} />
                  </View>
                  <View style={{ flex:1, alignItems: 'stretch'}}>
                    <TextInput placeholder="Email Address" style={{ flex: 1, marginLeft: 10, fontSize:15 }} autoCapitalize="none"/>
                  </View>
                </View>

                <View style={styles.inputContainer}>
                  <View style={{ width: 20}}>
                    <FontAwesome name="lock" size={24} color={theme.colors.card_grey} />
                  </View>
                  <View style={{ flex:1, alignItems: 'stretch'}}>
                    <TextInput placeholder="Password" secureTextEntry={hidePassword} style={{ flex: 1, marginHorizontal: 10, fontSize:15}} autoCapitalize="none"/>
                  </View>
                    <TouchableOpacity onPress={() => setHidePassword(!hidePassword)} style={{ width: 25, }}>
                      {hidePassword ?
                        <Feather name="eye-off" size={25} color={theme.colors.activeText} /> :
                        <Feather name="eye" size={25} color={theme.colors.activeText} />
                      }
                    </TouchableOpacity>
                </View>

                <View style={styles.inputContainer}>
                  <View style={{ width: 20 }}>
                    <FontAwesome name="lock" size={24} color={theme.colors.card_grey} />
                  </View>
                  <View style={{ flex:1, alignItems: 'stretch'}}>
                    <TextInput placeholder="Confirm Password" secureTextEntry={hideConfirmPassword} style={{ flex: 1, marginHorizontal: 10, fontSize:15 }} autoCapitalize="none"/>
                  </View>
                    <TouchableOpacity onPress={() => setHideConfirmPassword(!hideConfirmPassword)} style={{ width: 25 }}>
                      {hideConfirmPassword ?
                        <Feather name="eye-off" size={25} color={theme.colors.activeText} /> :
                        <Feather name="eye" size={25} color={theme.colors.activeText} />
                      }
                    </TouchableOpacity>
                </View>

                <View style={styles.agreementContainer}>
                    <Checkbox
                    style={styles.checkbox}
                    value={isChecked}
                    onValueChange={setChecked}
                    color={isChecked ? theme.colors.activeText : undefined}
                    />
                    <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                      <Text style={styles.agreementText}>By registering, you are agreeing with our </Text>
                      <Text style={styles.link}>Terms of Use</Text> 
                      <Text style={styles.agreementText}> and </Text>
                      <Text style={styles.link}>Privacy Policy.</Text>
                    </View>
                </View>

            </ScrollView>


            <TouchableOpacity style={styles.buttonContainer} onPress={() => navigation.navigate('SignUpSuccess')}>
              <Text style={styles.buttonText}>Sign up</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.bottomBar}>
            <Text style={styles.bottomBarText}>Already have an account? <Text style={styles.link}
              onPress={() => navigation.navigate('Login')}>Login</Text></Text>
          </View>
        </SafeAreaView>
      </View>
    </TouchableWithoutFeedback>
  );
}

export default Register;

const styles = {
    container: {
      flex: 1,
      backgroundColor: "#f1f3f1",
    },
    mainContent: {
      flex: 1,
      padding: 20,
      marginVertical: 20,
      color: theme.colors.text,
    },
    title: {
      fontSize: 24,
      marginBottom: 20,
      color: theme.colors.text,
    },

    inputContainer: {
      height: 60,
      backgroundColor: '#f8f8f8',
      borderColor: theme.colors.card_grey,
      borderWidth: 2,
      borderRadius: 50,
      marginBottom: 10,
      paddingHorizontal: 20,
      flexDirection: 'row',
      alignItems: 'center',
    },

    agreementContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginVertical: 20,
      paddingHorizontal: 20,
    },
    
    checkbox: {
      width: 20,
      height: 20,
      marginRight: 10,
      backgroundColor: '#f8f8f8',
      borderColor: theme.colors.card_grey,
    },
    
    agreementText: {
      fontSize: 15,
      color: theme.colors.card_grey,
    },

    link: {
      fontSize: 15,
      color: '#000000',
      textDecorationLine: 'underline',
    },
    

    buttonContainer: {
      marginHorizontal: 30,
      marginVertical: 20,
      height: 60,
      backgroundColor: theme.colors.activeText,
      borderRadius: 50,
      justifyContent: 'center',
      alignItems: 'center',
    },


    buttonText: {
      color: '#fff',
      fontSize: 25,
    },

    bottomBar: {
      height: 60,
      backgroundColor: "#f1f3f1",
      borderTopWidth: 1,
      borderColor: theme.colors.card_grey,
      justifyContent: 'center',
      alignItems: 'center',

    },

    bottomBarText: {
      color: theme.colors.card_grey,
      fontSize: 15,
    },
  };