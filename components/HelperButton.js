import React from 'react';
import { HeaderButton } from 'react-navigation-header-buttons';
import { Ionicans } from '@expo/vector-icons'
import { View , Text ,Platform } from 'react-native'
import Color from '../constants/Colors'

export default function HelperButton(props) {
  return (
        <HeaderButton 
            {...props} 
            IconComponenet = {Ionicans} 
            iconSize={23} 
            color={ Platform.OS == 'android' ? 'white' : Color.primary}
        />
  );
}
