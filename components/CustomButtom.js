import React from 'react';
import { Text , View , TouchableOpacity , StyleSheet } from 'react-native'
import Colors from '../constants/Colors';

export default function CustomButtom(props) {
  return (
      <View style={{justifyContent : 'center' , alignItems : 'center'}}>
         <TouchableOpacity 
            style={styles.screen}
            onPress={props.onSelect}
        >
            <Text style={styles.title}>Go Back</Text>
        </TouchableOpacity>
      </View>
       
  );
}

const styles = StyleSheet.create({
    screen : {
        marginVertical : 40,
        justifyContent : 'center',
        alignItems : 'center',
        width : '40%',
        padding:  5,
        backgroundColor : Colors.primary,
        borderRadius : 20 
    },
    title :{
        fontSize : 22,
        fontFamily : 'open-sans-bold',
        color : 'white'
    }  
})
