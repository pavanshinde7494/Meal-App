import React from 'react';
import { 
    View , 
    Text , 
    TouchableOpacity , 
    StyleSheet, 
    Platform ,
    TouchableNativeFeedback
} from 'react-native';

export default function CategoryGridTile(props) {
    let TouchableCmp = TouchableOpacity;
    if(Platform.OS == 'android')
        TouchableCmp = TouchableNativeFeedback
    return (
        <View
            style={styles.gridItem} 
            
        >
            <TouchableCmp
                onPress={ props.onSelect }
            >
                <View style={{...styles.container , ...{backgroundColor : props.color}}} >
                    <Text style={styles.title} numberOfLines = {2} >{props.title}</Text>
                </View>
            </TouchableCmp>
        </View>
    
    
  );
}

const styles = StyleSheet.create({
    gridItem : {
        flex : 1,
        margin : 15,
        height : 150
    },
    container : {
        flex : 1,
        borderRadius : 10,
        overflow : 'hidden',

        // IOS
        shadowColor : 'black',
        shadowOpacity : 0.26,
        shadowOffset : { width : 0, height : 2 },
        shadowRadius : 10,

        // Android
        elevation: 8,
        
        padding : 15,
        justifyContent : 'flex-end',
        alignItems : 'flex-end'
    },
    title : {
        fontFamily : 'open-sans-bold',
        fontSize : 21,
        textAlign : 'right'
    }
})


