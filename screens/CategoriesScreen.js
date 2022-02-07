import React from 'react';
import { View , Text ,StyleSheet , Button ,FlatList ,TouchableOpacity , TouchableNativeFeedback } from 'react-native';
import { CATEGORIES } from '../Data/dummy-data'; 
import CategoryGridTile from '../components/CategoryGridTile';
import { Ionicons } from '@expo/vector-icons';

export default function CategoriesScreen(props) {
    console.log(props.navigation );

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

      });

    const renderGridItem = (itemData) => {    
    
      return <CategoryGridTile 
          title = {itemData.item.title} 
          color = {itemData.item.color}
          onSelect = {()=>{
              props.navigation.navigate(
                    'CategoryMeal' , 
                    {
                        categoryId : itemData.item.id
                    }
              );
          }} />
    }

    return (
        <View>
            <FlatList 
                keyExtractor={(item,index)=>item.id} 
                data={CATEGORIES} 
                renderItem = {renderGridItem} 
                numColumns={2} 
            />
        </View>
        
    );
}


CategoriesScreen.navigationOptions = {
    headerTitle : 'Meal Categories',
};


const styles = StyleSheet.create({
    screen : {
        flex : 1,
        justifyContent : 'center',
        alignItems : 'center'
    }
});