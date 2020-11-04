import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { StackNavigationProp } from "react-navigation-stack/lib/typescript/src/vendor/types";

import styles from "../styles/challenge-page";

const Challenge = (props: { navigation: StackNavigationProp }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Heading</Text>
      <Text style={styles.subtitle}>Subtitle</Text>
      <Text style={styles.paragraph}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae
        neque quae quo voluptatibus. Earum, eveniet deserunt explicabo maiores
        voluptatum perferendis, sapiente ratione delectus minima adipisci dolore
        numquam exercitationem non expedita.
      </Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => props.navigation.navigate("CodePage")}
      >
        <Text style={styles.buttonText}>See Code</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => props.navigation.navigate("GNews")}
      >
        <Text style={styles.buttonText}>See Google News</Text>
      </TouchableOpacity>
    </View>
  );
};

Challenge.navigationOptions = {
  title: "Card Content",
};

export default Challenge;
