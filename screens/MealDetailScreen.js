import React from 'react';
import { View , Text ,StyleSheet ,Button } from 'react-native';
import { MEALS } from '../Data/dummy-data';
import { HeaderButtons , Item } from 'react-navigation-header-buttons'
// import HelperButton from '../components/HelperButton';
import Colors from '../constants/Colors';
import { Ionicons } from '@expo/vector-icons';

export default function MealDetailScreen(props) {

  let mealId = props.route.params.mealId
  let detailsObject = MEALS.filter((item)=>{
    return (item.id == mealId)
  })

  let selectedMeal = detailsObject[0];


  props.navigation.setOptions({
    headerTitle : selectedMeal.title
  })

  return (
      <View style={styles.screen}>
          <Text>{selectedMeal.id}</Text>
            <Button title = 'Go Back' onPress={()=>{
              props.navigation.popToTop();
            }} />
      </View>
  );
}

// MealDetailScreen.navigationOptions = (navigationData) => {
//     let mealId = navigationData.navigation.getParam('mealId');
//     let detailsObject = MEALS.filter((item)=>{
//       return (item.id == mealId)
//     });
//     let selectedMeal = detailsObject[0];
//     return {
//       headerTitle : selectedMeal.title,
//       headerRight : ()=>{
//         return <Ionicons 
//           name="ios-star" 
//           size={24}
//           color='white' 
//           onPress={()=>{
//             console.log('pressed')
//           }}
//           style={{paddingHorizontal : 12}}
//           />
//         // return <HeaderButtons HeaderButtonComponent={HelperButton}>
//         //   <Item
//         //     title='Favorite'
//         //     iconName='ios-star'
//         //     onPress={()=>{console.log('marked');}}
//         //   />
//         // </HeaderButtons>
//       } 

//     }
// }
   

  

const styles = StyleSheet.create({
  screen : {
    flex : 1,
    justifyContent : 'center',
    alignItems : 'center'
  }
});