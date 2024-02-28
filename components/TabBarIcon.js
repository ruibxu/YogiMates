
import { theme } from '../theme';
import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { View, Platform} from 'react-native';

export const TabBarIcon = (props) => {
    switch (props.name) {
        case 'HOME':
            return (
                
                props.focused?
                <View style={{borderRadius: 50, backgroundColor: theme.colors.activeText, padding: Platform.OS === 'ios' ? 8 : 10 , marginTop:Platform.OS === 'ios' ? 5 : 10 }}>
                    <MaterialIcons name="home" size={Platform.OS === 'ios' ? 20 : 25} color={theme.colors.text} />
                </View>
                :
                <View style={{borderRadius: 50, backgroundColor: theme.colors.iconBackground, padding: Platform.OS === 'ios' ? 8 : 10 , marginTop:Platform.OS === 'ios' ? 5 : 10 }}>
                    <MaterialIcons name="home" size={Platform.OS === 'ios' ? 20 : 25} color={theme.colors.text} />
                </View>
                
            );
        case 'CLASS':
            return (
                props.focused?
                <View style={{borderRadius: 50, backgroundColor: theme.colors.activeText, padding: Platform.OS === 'ios' ? 8 : 10 , marginTop:Platform.OS === 'ios' ? 5 : 10 }}>
                    <MaterialIcons name="play-lesson" size={Platform.OS === 'ios' ? 20 : 25} color={theme.colors.text} />
                </View>
                :
                <View style={{borderRadius: 50, backgroundColor: theme.colors.iconBackground, padding: Platform.OS === 'ios' ? 8 : 10 , marginTop:Platform.OS === 'ios' ? 5 : 10 }}>
                    <MaterialIcons name="play-lesson" size={Platform.OS === 'ios' ? 20 : 25} color={theme.colors.text} />
                </View>
            );
        case 'ANALYSIS':
            return (
                props.focused?
                <View style={{borderRadius: 50, backgroundColor: theme.colors.activeText, padding: Platform.OS === 'ios' ? 8 : 10 , marginTop:Platform.OS === 'ios' ? 5 : 10 }}>
                    <MaterialCommunityIcons name="google-analytics" size={Platform.OS === 'ios' ? 20 : 25} color={theme.colors.text} />
                </View>
                :
                <View style={{borderRadius: 50, backgroundColor: theme.colors.iconBackground, padding: Platform.OS === 'ios' ? 8 : 10 , marginTop:Platform.OS === 'ios' ? 5 : 10 }}>
                    <MaterialCommunityIcons name="google-analytics" size={Platform.OS === 'ios' ? 20 : 25} color={theme.colors.text} />
                </View>
            );
        case 'PROFILE':
            return (
                props.focused?
                <View style={{borderRadius: 50, backgroundColor: theme.colors.activeText, padding: Platform.OS === 'ios' ? 8 : 10 , marginTop:Platform.OS === 'ios' ? 5 : 10 }}>
                    <Feather name="user" size={Platform.OS === 'ios' ? 20 : 25} color={theme.colors.text} />
                </View>
                :
                <View style={{borderRadius: 50, backgroundColor: theme.colors.iconBackground, padding: Platform.OS === 'ios' ? 8 : 10 , marginTop:Platform.OS === 'ios' ? 5 : 10 }}>
                    <Feather name="user" size={Platform.OS === 'ios' ? 20 : 25} color={theme.colors.text} />
                </View>
            );
        default:
            return null;
    }
}