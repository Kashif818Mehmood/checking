// import {
//   createStackNavigator,
//   createAppContainer,
// } from "react-navigation-stack";
// import ComponentScreen from "./src/Screens/ComponentScreens";

// const navigator = createStackNavigator(
//   {
//     Components: ComponentScreen,
//   },
//   {
//     initialRouteName: "Components",

//     defaultNavigationsOptions: {
//       title: "App",
//     },
//   }
// );
// export default createAppContainer(navigator);

import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import ComponentScreen from "./src/Screens/ComponentScreens";
import ListScreen from "./src/Screens/ListScreen";
import HomeScreen from "./src/Screens/HomeScreen";
import ImageScreen from "./src/Screens/ImageScreen";
import BoxScreen from "./src/Screens/BoxScreen";
import CounterScreen from "./src/Screens/CounterScreen";
import ColorScreen from "./src/Screens/ColorScreen";

const navigator = createStackNavigator(
  {
    List: ComponentScreen,
    List1: ListScreen,
    Home: HomeScreen,
    Image: ImageScreen,
    Box: BoxScreen,
    Counter: CounterScreen,
    Color: ColorScreen,
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "App1",
    },
  }
);
export default createAppContainer(navigator);
