import React from "react";
import { Platform } from "react-native";
import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";
import MoviesScreen from "../screens/Movies";
import TvScreen from "../screens/TV";
import SearchScreen from "../screens/Search";
import { BG_COLOR } from "../constants/Color";
import TabBarIcon from "../Components/TabBarIcon";

const TabNavigation = createBottomTabNavigator(
    {
      Movie: {
        screen: MoviesScreen,
        navigationOptions: {
          tabBarIcon: ({ focused }) => (
            <TabBarIcon
              focused={focused}
              name={Platform.OS === "ios" ? "ios-film" : "md-film"}
            />
          )
        }
      },
      TV: {
        screen: TvScreen,
        navigationOptions: {
          tabBarIcon: ({ focused }) => (
            <TabBarIcon
              focused={focused}
              name={Platform.OS === "ios" ? "ios-tv" : "md-tv"}
            />
          )
        }
      },
      Search: {
        screen: SearchScreen,
        navigationOptions: {
          tabBarIcon: ({ focused }) => (
            <TabBarIcon
              focused={focused}
              name={Platform.OS === "ios" ? "ios-search" : "md-search"}
            />
          )
        }
      }
    },
    {
      tabBarOptions: {
        showLabel: false,
        style: {
          backgroundColor: BG_COLOR
        }
      }
    }
  );
  
  export default createAppContainer(TabNavigation);
