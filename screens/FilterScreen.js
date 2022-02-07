import React , {useState} from 'react';
import { View , Text ,StyleSheet  ,Switch, Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Colors from '../constants/Colors';


const FilterSwitch = (props)=>{
  return(
    <View style = {styles.filterContainer}>
      <Text style={styles.constaints} >{props.label}</Text>
      <Switch 
        value = {props.state} 
        onValueChange = {props.onChange.bind(!props.state)}
        trackColor={{
          true : '#A25AF8',
          false : '#BDBDBD'
        }}
        thumbColor = {Colors.primary}  
      />
    </View>
  )
}

export default function FilterScreen(props) {
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
    },
    headerRight : ()=>{
      return(
        <View style={{marginRight : 12}} >
              <Ionicons 
                  onPress={()=>{ 
                    props.navigation.navigate(
                      '<Route name>',{
                        isGutenFree : isGutenFree,
                        isLactoseFree : isLactoseFree,
                        isVegan : isVegan,
                        isVegetarian : isVegetarian 
                      }
                    ) 
                    // console.log(isGutenFree , isLactoseFree , isVegan , isVegetarian );
                  }}
                  name="ios-save" 
                  size={24} 
                  color="white" 
              />
          </View>
      )
    }
  })

  const [isGutenFree , setIsGlutenFree] = useState(false);
  const [isLactoseFree , setIsLactoseFree] = useState(false);
  const [isVegan , setIsVegan] = useState(false);
  const [isVegetarian , setIsVegetarian] = useState(false);

  return (
      <View style={styles.screen} >
          <Text style={styles.title} >Available Filters / Restrictions</Text>

          <FilterSwitch 
            label='Gluteen Free' 
            state = {isGutenFree} 
            onChange={(newValue)=>{
              setIsGlutenFree(newValue)
          }}/>

          <FilterSwitch 
            label='Lactose-Free' 
            state = {isLactoseFree} 
            onChange={(newValue)=>{
              setIsLactoseFree(newValue)
          }}/>

          <FilterSwitch 
            label='Vegan' 
            state = {isVegan} 
            onChange={(newValue)=>{
              setIsVegan(newValue)
          }}/>

          <FilterSwitch 
            label='Vegetarian' 
            state = {isVegetarian} 
            onChange={(newValue)=>{
              setIsVegetarian(newValue)
          }}/>

      </View>
  );
}


const styles = StyleSheet.create({
  screen : {
    flex : 1,
    alignItems : 'center'
  },
  title : {
    fontFamily : 'open-sans-bold',
    fontSize : 22,
    margin : 20,
    textAlign : 'center'
  },
  filterContainer : {
    flexDirection : 'row',
    justifyContent : 'space-between',
    alignItems : 'center',
    width : '80%',
    marginVertical : Platform.OS == 'android' ? 0 : 10
  },
  constaints : {
    fontFamily : 'open-sans'
  }
});