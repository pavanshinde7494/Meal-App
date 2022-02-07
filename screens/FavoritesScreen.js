import React from 'react';
import { View , Text ,StyleSheet , Button } from 'react-native';

import MealList from '../components/MealList';
import { MEALS } from '../Data/dummy-data'

export default function FavoritesScreen(props) {
  const favMeals = MEALS.filter((meal)=>{
    return (meal.id == 'm1' || meal.id == 'm2')
  })
  return (
      <MealList listData = {favMeals} navigation = {props.navigation} />
  );
}


const styles = StyleSheet.create({

});