import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const ListItem = ({ title, onPress, backgroundColor,color,detail }) => {
  return (
    detail?
    <TouchableOpacity style={[styles.container, {backgroundColor: backgroundColor, justifyContent: 'space-between'}]} onPress={onPress}>
        <Text style={[styles.text, {color: color}]}>{title}</Text>
        {detail}
    </TouchableOpacity>
    :
    <TouchableOpacity style={[styles.container, {backgroundColor: backgroundColor}]} onPress={onPress}>
      <Text style={[styles.text, {color: color}]}>{title}</Text>
    </TouchableOpacity>
  );
};


const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      padding: 10,
      paddingVertical: 15,
      marginBottom: 10,
      marginHorizontal: 20,
      borderRadius: 10,
      elevation: 5,
      // for iOS:
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
    },
    text: {
      marginLeft: 10,
      fontSize: 18,
    },
  });
  
  export default ListItem;