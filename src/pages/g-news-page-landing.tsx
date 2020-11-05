import { Picker } from "@react-native-community/picker";
import React, { Component } from "react";
import { View, Text, Image } from "react-native";
import { NavigationRoute } from "react-navigation";
import { StackNavigationProp } from "react-navigation-stack/lib/typescript/src/vendor/types";

import styles from "../styles/g-news-page-landing";

export type Params = { country: string };

export default class GNewsLanding extends Component<{
  navigation: StackNavigationProp<NavigationRoute<Params>, Params>;
}> {
  static navigationOptions = {
    title: "Google News",
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.label}>Selecione um país</Text>
        <View style={styles.pickerContainer}>
          <Picker
            onValueChange={(text) => {
              if (text.toString() !== "")
                this.props.navigation.navigate("GNews", {
                  selectedCountry: text.toString(),
                });
            }}
          >
            <Picker.Item label="Escolha um item" value="" />
            <Picker.Item label="Estados Unidos" value="us" />
            <Picker.Item label="Argentina" value="ar" />
            <Picker.Item label="Brasil" value="br" />
          </Picker>
        </View>
      </View>
    );
  }
}
