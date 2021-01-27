import React from 'react';
import { Image } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import BookDonateScreen from '../screens/BookDonateScreen';
import BookRequestScreen from '../screens/BookRequestScreen';
import SectorLocation from '../screens/SectorLocationScreen';



export const AppTabNavigator = createBottomTabNavigator({
  DonateBooks : {
    screen: BookDonateScreen,
    navigationOptions :{
      tabBarIcon : <Image source={require("../assets/request-list.png")} style={{width:20, height:20}}/>,
      tabBarLabel : "Donate Books",
    }
  },
  BookRequest: {
    screen: BookRequestScreen,
    navigationOptions :{
      tabBarIcon : <Image source={require("../assets/request-book.png")} style={{width:20, height:20}}/>,
      tabBarLabel : "Book Request",
    }
  },
  Authority: {
    screen: SectorLocation,
    navigationOptions :{
      tabBarIcon : <Image source={require("../assets/map.png")} style={{width:20, height:20}}/>,
      tabBarLabel : "Book Request",
    }
  }
});