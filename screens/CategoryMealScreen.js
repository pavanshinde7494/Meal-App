import React from 'react';
import { View , Text ,StyleSheet,Button , FlatList} from 'react-native';
import Colors from '../constants/Colors';

import { CATEGORIES , MEALS } from '../Data/dummy-data';
import MealItem from '../components/MealItem';

export default function CategoryMealScreen(props) { 

  // Fetching data from CATEGORIES and MEALS
    let catId = props.route.params.categoryId;
    let selectedCategory = CATEGORIES.filter((cat)=>{
      return (cat.id == catId)
    })
    selectedCategory = selectedCategory[0]
   

    let displayedMeals = MEALS.filter((meal)=>{
      return (meal.categoryIds.find((connectedTo)=>{
        return connectedTo === selectedCategory.id;
      }));
    })

    

    // // Setting Header
    props.navigation.setOptions({
      headerTitle : selectedCategory.title
    });

    
  const renderMealItem = (itemData)=>{
    return(
      <MealItem 
        title={itemData.item.title} 
        duration={itemData.item.duration}
        complexity={itemData.item.complexity}
        affordability={itemData.item.affordability}
        image={itemData.item.imageUrl}
        onSelectMeal={()=>{
          props.navigation.navigate('MealDetail',
            {
              mealId : itemData.item.id
            }
          )
        }} 
      />
    )
  }


  return (
      <View style={styles.screen}>
          <FlatList 
            data={displayedMeals} 
            keyExtractor={(item,index)=>item.id} 
            renderItem={renderMealItem}
            style={{width : '100%'}}
          />

      </View>
  );
}

const styles = StyleSheet.create({
  screen : {
    flex : 1,
    justifyContent : 'center',
    alignItems : 'center'
  }
})

