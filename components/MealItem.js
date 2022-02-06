import React from 'react';
import { View , Text , StyleSheet  , TouchableOpacity , ImageBackground, Image , TouchableNativeFeedback} from 'react-native';

export default function MealItem(props) {
    return (
        <View style={styles.mealItem}>
            <TouchableNativeFeedback onPress={props.onSelectMeal}>
                <View>
                    <View style={{...styles.mealRow , ...styles.mealHeader}}>
                        <ImageBackground 
                            source={{uri : props.image}} 
                            style={styles.bgImage}
                        >   
                            <View style={styles.titleContainer}>
                                <Text style={styles.title} numberOfLines={1}>
                                    {props.title}
                                </Text>
                            </View>
                            
                        </ImageBackground>
                    </View>
                    <View style={{...styles.mealRow , ...styles.mealDetail}}>
                        
                        <Text style={styles.content}>{props.duration}m</Text>
                        <Text style={styles.content}>{props.complexity.toUpperCase()}</Text>
                        <Text style={styles.content}>{props.affordability.toUpperCase()}</Text>
                    </View>
                </View>
                
            </TouchableNativeFeedback>
        </View>
            
        
    );
}

const styles = StyleSheet.create({
    mealItem :{
        margin : 15,
        height : 200,
        backgroundColor : '#e6e9ed',
        borderRadius : 15,
        overflow : 'hidden',
        elevation : 7
    },
    mealRow : {
        flexDirection:  'row'
    },
    mealHeader : {
        height : '85%'  
    } , 
    mealDetail : {
        paddingHorizontal : 10,
        justifyContent : 'space-between',
        alignItems : 'center',
        height : '15%'
        
    },
    bgImage : {
        width : '100%',
        height : '100%',
        justifyContent:  'flex-end'
    },
    titleContainer : {
        backgroundColor : 'rgba(0,0,0,0.5)' ,
        paddingHorizontal: 12,
    }
    ,
    title : {
        fontFamily : 'open-sans-bold',
        fontSize : 22,
        color : 'white',
        textAlign : 'center'
    },
    content : {
        fontFamily : 'open-sans'
    }
})
