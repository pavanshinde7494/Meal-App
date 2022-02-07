import React from 'react';
import { View , Text ,StyleSheet,Button , FlatList} from 'react-native';
import Colors from '../constants/Colors';

import { CATEGORIES , MEALS } from '../Data/dummy-data';
import MealItem from '../components/MealItem';
import MealList from '../components/MealList';

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

    // Setting Header
    props.navigation.setOptions({
      headerTitle : selectedCategory.title
    });


  return (
      <MealList listData = {displayedMeals} navigation = {props.navigation}/>
  );
}

const styles = StyleSheet.create({
 
})

