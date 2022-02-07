import React from 'react';
import { View ,
     Text ,
     StyleSheet ,
     Button , 
     ScrollView,
     Image
 } from 'react-native';
import { MEALS } from '../Data/dummy-data';
import { HeaderButtons , Item } from 'react-navigation-header-buttons'
// import HelperButton from '../components/HelperButton';
import Colors from '../constants/Colors';
import { Ionicons } from '@expo/vector-icons';
import { List } from 'react-native-paper';
import CustomButtom from '../components/CustomButtom';



const ListItem = (props)=>{
  return (
    <View style={styles.listItem}>
      <Text style={{fontFamily : 'open-sans'}} >{props.children}</Text>
    </View>
  )
}


export default function MealDetailScreen(props) {

  // Get selected meal
  let mealId = props.route.params.mealId
  let detailsObject = MEALS.filter((item)=>{
    return (item.id == mealId)
  })

  let selectedMeal = detailsObject[0];

// setting header
  props.navigation.setOptions({
    headerTitle : selectedMeal.title
  })

  return (
    <View style={styles.screen}>
        <ScrollView>
          <View style={styles.headContainer}>
            <Image source={{uri : selectedMeal.imageUrl}} style={styles.image} />
            
            <View style={styles.details}>            
                <Text style={styles.content}>{selectedMeal.duration}m</Text>
                <Text style={styles.content}>{selectedMeal.complexity.toUpperCase()}</Text>
                <Text style={styles.content}>{selectedMeal.affordability.toUpperCase()}</Text>
            </View>

          </View>
          <View style={{...styles.headContainer , paddingVertical :  20}}>
            <Text style={styles.title}>
                Ingredients
              </Text>
              <View>
                {
                  selectedMeal.ingredients.map(ingredient=> (
                          <ListItem key={ingredient}>{ingredient}</ListItem>  
                    )
                  )
                }
              </View>
          </View>
          
           
         
          <View style={{...styles.headContainer , paddingVertical :  20}}>
            <Text style={styles.title}>
                Steps
              </Text>
              <View>
                {
                  selectedMeal.steps.map(step=> (
                          <ListItem key={step}>{step}</ListItem>  
                    )
                  )
                }
              </View>
          </View>
          
        
        <View>
          <CustomButtom title = 'Go Back' onSelect={()=>{
            props.navigation.popToTop();
          }} />
          
        </View>
      </ScrollView>
    </View>
    
      
  );
}
  

const styles = StyleSheet.create({
    screen : {
      paddingHorizontal : 20,
    },
    headContainer : {
      width : '100%' ,
      backgroundColor : '#e6e9ed',
      borderRadius : 30,
      overflow : 'hidden',
      elevation : 7,
      marginVertical : 10
    },
    image : {
      width : '100%',
      height : 200
    },
    content:{
      fontFamily : 'open-sans'
    },
    details : {
      flexDirection : 'row',
      padding : 7,
      justifyContent : 'space-around'
    },
    title : {
      fontFamily : 'open-sans-bold',
      fontSize : 22,
      textAlign : 'center'
    },
    listItem : {
      padding : 5,
      marginHorizontal : 10,
      marginVertical : 5,
      borderBottomColor : 'black',
      borderWidth : 1,
      borderRadius : 5   
    }
});