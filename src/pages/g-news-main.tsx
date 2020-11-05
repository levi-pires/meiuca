import React, { Component } from "react";
import { NavigationRoute } from "react-navigation";
import { StackNavigationProp } from "react-navigation-stack/lib/typescript/src/vendor/types";
import { Image, Text, View } from "react-native";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";

import axios from "axios";

import styles from "../styles/g-news-page-main";

export default class GNews extends Component<{
  navigation: StackNavigationProp<
    NavigationRoute<{}>,
    { selectedCountry: string }
  >;
}> {
  static navigationOptions = {
    title: "Google News",
  };

  state = {
    jsx: <View />,
  };

  async componentDidMount() {
    try {
      const news = (
        await axios.get(
          `http://newsapi.org/v2/top-headlines?country=${
            this.props.navigation.state.params!.selectedCountry
          }&apiKey=889fb23a624b4fa7a0ee2eb46c8f6c23`
        )
      ).data as {
        status: string;
        totalResults: number;
        articles: { title: string; url: string; urlToImage: string | null }[];
      };

      if (news.status === "ok") {
        this.setState({
          jsx: news.articles.map((item, index) => (
            <View key={index} style={styles.cardContainer}>
              <Text style={styles.title}>{item.title}</Text>
              {item.urlToImage !== null &&
              item.urlToImage.includes("https://") ? (
                <View style={styles.imageContainer}>
                  <Image
                    source={{ uri: item.urlToImage }}
                    style={styles.image}
                  />
                </View>
              ) : null}
              <TouchableOpacity
                style={styles.button}
                onPress={() => this.props.navigation.navigate("Web", item)}
              >
                <Text style={styles.buttonText}>Veja mais</Text>
              </TouchableOpacity>
            </View>
          )),
        });
      } else {
        this.setState({ jsx: <Text>Error</Text> });
      }
    } catch (err) {
      this.setState({ jsx: <Text>{err.toString()}</Text> });
    }
  }

  render() {
    return (
      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.scrollContentContainer}
      >
        {this.state.jsx}
      </ScrollView>
    );
  }
}
