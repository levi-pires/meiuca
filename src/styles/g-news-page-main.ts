import { StyleSheet } from "react-native";

import * as StyleTokens from "../tokens";
import globalStyles from "../styles/global";

export default StyleSheet.create({
  cardContainer: {
    width: "90%",
    borderBottomWidth: StyleTokens.borderWidthThin,
    borderColor: StyleTokens.colorNeutral03,
    marginTop: StyleTokens.spacingStackXxxs,
  },

  title: {
    ...globalStyles.header,
    fontSize: StyleTokens.fontSizeSm,
    marginTop: StyleTokens.spacingStackNano,
  },

  imageContainer: {
    borderWidth: StyleTokens.borderWidthThin,
    borderColor: StyleTokens.colorNeutral03,
  },

  image: {
    height: 225,
    width: "100%",
  },

  button: {
    ...globalStyles.button,
    marginTop: StyleTokens.spacingStackXxxs,
  },

  buttonText: globalStyles.buttonText,

  scroll: {
    ...globalStyles.container,
    padding: 0,
  },

  scrollContentContainer: {
    alignItems: "center",
  },
});
