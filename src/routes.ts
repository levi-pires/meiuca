import {
  CardStyleInterpolators,
  createStackNavigator,
} from "react-navigation-stack";
import { createAppContainer } from "react-navigation";

import Challenge from "./pages/challenge";
import Web from "./pages/web";
import GNewsLanding from "./pages/g-news-page-landing";
import GNews from "./pages/g-news-main";

import { colorNeutral03 } from "./tokens";

const Stack = createStackNavigator(
  {
    Challenge,
    Web,
    GNewsLanding,
    GNews,
  },
  {
    headerMode: "float",
    mode: "modal",
    defaultNavigationOptions: {
      gestureEnabled: true,
      gestureDirection: "horizontal",
      gestureResponseDistance: { horizontal: 100 },
      headerTitleAlign: "center",
      cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      headerStyle: {
        backgroundColor: colorNeutral03,
      },
    },
  }
);

export default createAppContainer(Stack);
