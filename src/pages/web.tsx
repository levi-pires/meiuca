import React from "react";
import { WebView } from "react-native-webview";
import { NavigationRoute } from "react-navigation";
import { StackNavigationProp } from "react-navigation-stack/lib/typescript/src/vendor/types";

const Web = (props: {
  navigation: StackNavigationProp<NavigationRoute<{}>, { url: string }>;
}) => {
  return <WebView source={{ uri: props.navigation.state.params!.url }} />;
};

export default Web;
