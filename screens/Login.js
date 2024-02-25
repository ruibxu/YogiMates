import React,{useState} from 'react';
import { View, Text, TextInput, TouchableOpacity,TouchableWithoutFeedback,Keyboard,ScrollView} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import { theme } from '../theme';
import { Feather } from '@expo/vector-icons';

const Login = ({navigation}) => {
  const [hidePassword, setHidePassword] = useState(true);
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style = {{flex:1}}>
      <SafeAreaView edges={["top"]} style={{ flex:0, backgroundColor: theme.colors.background, }} />
      <SafeAreaView edges={["left", "right", "bottom"]} style={styles.container}>
        <View style={{backgroundColor: theme.colors.background, flex: 1}}>
          <ScrollView style={styles.mainContent} keyboardShouldPersistTaps='handled'>
            <Text style={styles.title}>Welcome back!</Text>
            
            <View style={styles.inputContainer}>
              <View style={{ width: 20 }}>
                <FontAwesome name="envelope" size={20} color={theme.colors.card_grey} />
              </View>
              <View style={{ flex:1, alignItems: 'stretch'}}>
                <TextInput placeholder="Email Address" style={{ flex: 1, marginLeft: 10 }} autoCapitalize="none"/>
              </View>
            </View>

            <View style={styles.inputContainer}>
              <View style={{ width: 20 }}>
                <FontAwesome name="lock" size={24} color={theme.colors.card_grey} />
              </View>
              <View style={{ flex:1, alignItems: 'stretch'}}>
                <TextInput placeholder="Password" secureTextEntry={hidePassword} autoCapitalize="none" style={{ flex: 1, marginLeft: 10 }} />
              </View>
              <TouchableOpacity onPress={() => setHidePassword(!hidePassword)} style={{ width: 25 }}>
                    {hidePassword ?
                      <Feather name="eye-off" size={25} color={theme.colors.activeText} /> :
                      <Feather name="eye" size={25} color={theme.colors.activeText} />
                    }
              </TouchableOpacity>
            </View>

            <TouchableOpacity style={{marginVertical:10}}>
              <Text style={styles.link}>Forgot Password?</Text>
            </TouchableOpacity>


          </ScrollView>
          <TouchableOpacity style={styles.buttonContainer} onPress={() => navigation.navigate('HomeSection')}>
              <Text style={styles.buttonText}>Sign In</Text>
          </TouchableOpacity>
        </View>
      
        <View style={styles.bottomBar}>
          <Text style={styles.bottomBarText}>Don't have an account? <Text style={styles.link}
              onPress={() => navigation.navigate('Register')}>Register</Text> </Text>
        </View>

      </SafeAreaView>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Login;


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
    backgroundColor: theme.colors.background,
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
  link: {
    fontSize: 15,
    color: '#000',
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
