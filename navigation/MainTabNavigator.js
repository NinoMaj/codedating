import React from 'react';
import { Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { TabNavigator, TabBarBottom } from 'react-navigation';

import Colors from '../constants/Colors';

import SwipeScreen from '../screens/SwipeScreen';
import AppliedScreen from '../screens/AppliedScreen';
import PostedScreen from '../screens/PostedScreen';
import ProfileScreen from '../screens/ProfileScreen';

export default TabNavigator(
  {
    Swipe: {
      screen: SwipeScreen,
    },
    Applied: {
      screen: AppliedScreen,
    },
    Posted: {
      screen: PostedScreen,
    },
    Profile: {
      screen: ProfileScreen,
    },
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused }) => {
        const { routeName } = navigation.state;
        let iconName;
        switch (routeName) {
          case 'Swipe':
            iconName = Platform.OS === 'ios'
              ? `ios-finger-print${focused ? '' : '-outline'}`
              : 'md-finger-print';
            break;
          case 'Applied':
            iconName = Platform.OS === 'ios'
              ? `ios-checkmark-outline${focused ? '' : '-outline'}`
              : 'md-checkmark';
            break;
          case 'Posted':
            iconName = Platform.OS === 'ios'
              ? `ios-list${focused ? '' : '-outline'}`
              : 'md-list';
            break;
          case 'Profile':
            iconName = Platform.OS === 'ios'
              ? `ios-person${focused ? '' : '-outline'}`
              : 'md-person';
        }
        return (
          <Ionicons
            name={iconName}
            size={28}
            style={{ marginBottom: -3 }}
            color={focused ? Colors.tabIconSelected : Colors.tabIconDefault}
          />
        );
      },
    }),
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',
    animationEnabled: false,
    swipeEnabled: false,
  }
);
