import { Picker } from "@react-native-community/picker";
import React from "react";
import { View, Text } from "react-native";
import { NavigationRoute } from "react-navigation";
import { StackNavigationProp } from "react-navigation-stack/lib/typescript/src/vendor/types";

import styles from "../styles/g-news-page-landing";

export type Params = { country: string };

const GNewsLanding = (props: {
  navigation: StackNavigationProp<NavigationRoute<Params>, Params>;
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Selecione um país</Text>
      <View style={styles.pickerContainer}>
        <Picker
          onValueChange={(text) => {
            if (text.toString() !== "")
              props.navigation.navigate("GNews", {
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
};

GNewsLanding.navigationOptions = {
  title: "Google News",
};

export default GNewsLanding;
