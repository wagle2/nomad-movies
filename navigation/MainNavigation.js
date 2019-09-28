import {createStackNavigator} from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import TabNavigation from "./TabNavigation";
import DetailScreen from "../screens/Detail";

const MainNavigation = createStackNavigator({
    TabNavigation,
    DetailScreen
});

export default createAppContainer(MainNavigation);