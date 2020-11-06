/**
 * @format
 */

import { AppRegistry, StatusBar } from "react-native";
import App from "./src";
import { name as appName } from "./app.json";

import { colorNeutral03 } from "./src/tokens";

StatusBar.setBackgroundColor(colorNeutral03);
StatusBar.setBarStyle("dark-content");

AppRegistry.registerComponent(appName, () => App);
