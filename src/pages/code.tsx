import React from "react";
import { WebView } from "react-native-webview";

const CodePage = () => {
  return <WebView source={{ uri: "https://github.com/levi-pires/meiuca/" }} />;
};

CodePage.navigationOptions = {
  title: "Github",
};

export default CodePage;
