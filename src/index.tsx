import React from "react";
import { StatusBar } from "react-native";

import Routes from "./routes";

import { colorNeutral03 } from "./tokens";

StatusBar.setBackgroundColor(colorNeutral03);
StatusBar.setBarStyle("dark-content");

export default function App() {
  return <Routes />;
}
