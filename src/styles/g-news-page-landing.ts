import { StyleSheet } from "react-native";
import * as StyleTokens from "../tokens";

export default StyleSheet.create({
  container: {
    justifyContent: "center",
    height: "100%",
    paddingHorizontal: StyleTokens.spacingSquishXs[1],
    backgroundColor: StyleTokens.colorNeutral05,
  },

  label: {
    fontFamily: StyleTokens.fontFamilyBase,
    fontSize: StyleTokens.fontSizeXs,
    marginBottom: StyleTokens.spacingStackNano,
  },

  pickerContainer: {
    borderWidth: StyleTokens.borderWidthThin,
    borderColor: StyleTokens.colorNeutral04,
  },
});
