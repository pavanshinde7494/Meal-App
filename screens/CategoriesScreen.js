import React from 'react';
import { View , Text ,StyleSheet , Button ,FlatList ,TouchableOpacity } from 'react-native';
import { CATEGORIES } from '../Data/dummy-data'; 
import CategoryGridTile from '../components/CategoryGridTile';


export default function CategoriesScreen(props) {
    console.log(props.navigation , props.route);

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