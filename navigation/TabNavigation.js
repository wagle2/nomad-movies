import React from "react";
import { Platform } from "react-native";
import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";
import {createStackNavigator} from "react-navigation-stack";
import MoviesScreen from "../screens/Movies/MoviesContainer";
import TvScreen from "../screens/TV/TVPresenter";
import SearchScreen from "../screens/Search";
import { BG_COLOR } from "../constants/Color";
import TabBarIcon from "../Components/TabBarIcon";
import { createStack } from "./config";

const TabNavigation = createBottomTabNavigator(
    {
      Movie: {
        screen: createStack(MoviesScreen,"Movies"),
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
        screen: createStack(TvScreen,"TV"),
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
        screen: createStack(SearchScreen,"Search"),
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
