import React from 'react';
import { View , Text ,StyleSheet , Button } from 'react-native';

import MealList from '../components/MealList';
import { MEALS } from '../Data/dummy-data'
import { Ionicons } from '@expo/vector-icons';

export default function FavoritesScreen(props) {
  const favMeals = MEALS.filter((meal)=>{
    return (meal.id == 'm1' || meal.id == 'm2')
  })

  props.navigation.setOptions({
    headerLeft : ()=>{
      return (
          <View style={{marginLeft : 8}} >
              <Ionicons 
                  onPress={()=>{props.navigation.toggleDrawer()}}
                  name="ios-menu" 
                  size={24} 
                  color="white" 
              />
          </View>
      )
    }
  })
  return (
      <MealList listData = {favMeals} navigation = {props.navigation} />
  );
}


const styles = StyleSheet.create({

});