import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import SearchScreen from "./src/screens/SearcScreen";
import ResultsShowScreen from "./src/screens/ResultsShowScreen";

const navigator = createStackNavigator(
  {
    Search: SearchScreen,
    ResultsShow: ResultsShowScreen,
  },
  {
    initialRouteName: "Search",
    defaultNavigationOptions: {
      title: "Business Search",
      cardStyle: { backgroundColor: "#FFFFFF" },
    },
  }
);
//createAppContainer creates default app component and displays whatever content the navigator is producing inside of that component
export default createAppContainer(navigator);
