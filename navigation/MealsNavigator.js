// import { createStackNavigator } from 'react-navigation-stack'
// // import { createBottomTabNavigator } from 'react-navigation-tabs';
// import { createAppContainer } from 'react-navigation'
// import CategoriesScreen from '../screens/CategoriesScreen'
// import CategoryMealsScreen from '../screens/CategoryMealScreen'
// import MealDetailScreen from '../screens/MealDetailScreen'
// import Colors from '../constants/Colors'

//  const MealsNavigator = createStackNavigator({
//     Categories : CategoriesScreen,
//     CategoryMeals : {
//         screen : CategoryMealsScreen,
//     },
//     MealDetail : MealDetailScreen
// } , {
//         initialRouteName : 'Categories',
//         mode : 'modal',   
//         defaultNavigationOptions : {
//             headerStyle : {
//                 backgroundColor : Colors.primary,
//             },
//             headerTitleStyle : {
//                 fontFamily : 'open-sans-bold'
//             },
//             headerTintColor : 'white',
//         }   
// });


// export default createAppContainer(MealsNavigator)



import { createStackNavigator } from '@react-navigation/stack'
import CategoriesScreen from '../screens/CategoriesScreen'
import CategoryMealsScreen from '../screens/CategoryMealScreen'
import MealDetailScreen from '../screens/MealDetailScreen'
import Colors from '../constants/Colors';
import { Text } from 'react-native'
import { Ionicons } from '@expo/vector-icons';

let Stack = createStackNavigator();


let config =  {
    headerStyle : {
        backgroundColor : Colors.primary,
    },
    headerTitleStyle : {
        fontFamily : 'open-sans-bold'
    },
    headerTintColor : 'white',
}

export default function  MealsNavigator (){
    return (
        <Stack.Navigator initialRouteName='Categories'  >
            <Stack.Screen 
                name="Categories" 
                component={CategoriesScreen} 
                options = {{
                    ...config,
                    headerTitle : 'Meal Categories'
                }}
            />
            <Stack.Screen 
                name="CategoryMeal" 
                component={CategoryMealsScreen} 
                options = {
                    config
                }
            />
            <Stack.Screen 
                name="MealDetail" 
                component={MealDetailScreen}
                options = {{
                    ...config,
                    headerRight : ()=>{
                        return (
                            <Ionicons 
                                name="ios-star" 
                                size={24} 
                                color="white" 
                                style={{marginHorizontal : 12}}
                                onPress={()=>{console.log('Pressed');}}
                            />
                        )
                    }
                }}
            />
        </Stack.Navigator>
    )
};