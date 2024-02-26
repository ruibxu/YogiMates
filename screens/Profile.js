import React from 'react';
import { View, Text, ScrollView} from 'react-native';
import { theme } from '../theme';
import {SafeAreaView} from 'react-native-safe-area-context';
import ListItem from '../components/ListItem';
import { MaterialIcons } from '@expo/vector-icons';
const Profile = ({navigation}) => {
    return (
        <ScrollView>
            <View style={{paddingTop: 10, paddingBottom: 50}}>
                <ListItem 
                    title="Watch List" 
                    onPress={() => console.log('Watch List pressed')} 
                    backgroundColor={theme.colors.card_light_green}
                    color={theme.colors.text}
                />
                <ListItem 
                    title="Watch History" 
                    onPress={() => console.log('Watch List pressed')} 
                    backgroundColor={theme.colors.card_light_green}
                    color={theme.colors.text}
                />
                <ListItem 
                    title="Calendar" 
                    onPress={() => console.log('Watch List pressed')} 
                    backgroundColor={theme.colors.card_light_green}
                    color={theme.colors.text}
                />
            </View>

            <View style={{paddingTop: 10, paddingBottom: 50}}>
                <ListItem 
                    title="Settings" 
                    onPress={() => console.log('Watch List pressed')} 
                    backgroundColor={theme.colors.card_light_grey}
                    color={theme.colors.card_grey}
                />
                

                <ListItem 
                    title="Help" 
                    onPress={() => console.log('Watch List pressed')} 
                    backgroundColor={theme.colors.card_light_grey}
                    color={theme.colors.card_grey}
                />

            </View>

            <View style={{paddingTop: 10, paddingBottom: 50}}>
            <ListItem 
                title="Log Out" 
                onPress={() => navigation.navigate('Login')} 
                backgroundColor={theme.colors.card_light_orange}
                color={theme.colors.secondary}
                detail ={
                    <MaterialIcons name="exit-to-app" size={24} color={theme.colors.secondary}/>
                }
            />
            </View>

        </ScrollView>
    )
}

export default Profile;