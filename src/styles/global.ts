import { StyleSheet } from "react-native";
import * as StyleTokens from "../tokens";
import { renderNativeFont } from "../fonts";

export default StyleSheet.create({
  /**
   * Shape
   */
  container: {
    height: "100%",
    borderRadius: StyleTokens.borderRadiusNone,
    padding: StyleTokens.spacingInsetLg,
    borderWidth: StyleTokens.borderWidthThin,
    borderColor: StyleTokens.colorNeutral04,
    backgroundColor: StyleTokens.colorNeutral05,
  },

  header: {
    fontSize: StyleTokens.fontSizeLg,
    // lineHeight: StyleTokens.lineHeightDistant,
    fontFamily: renderNativeFont({
      fontFamily: StyleTokens.fontFamilyBase,
      fontWeight: StyleTokens.fontWeightBold,
    }),
    color: StyleTokens.colorNeutral01,
    marginBottom: StyleTokens.spacingStackXxxs,
  },

  subtitle: {
    fontSize: StyleTokens.fontSizeMd,
    // lineHeight: StyleTokens.lineHeightMedium,
    fontFamily: renderNativeFont({
      fontFamily: StyleTokens.fontFamilyBase,
      fontWeight: StyleTokens.fontWeightSemiBold,
    }),
    color: StyleTokens.colorNeutral02,
    marginBottom: StyleTokens.spacingStackXxs,
  },

  paragraph: {
    fontSize: StyleTokens.fontSizeXs,
    //   lineHeight: StyleTokens.lineHeightDistant,
    fontFamily: renderNativeFont({
      fontFamily: StyleTokens.fontFamilyBase,
      fontWeight: StyleTokens.fontWeightMedium,
    }),
    color: StyleTokens.colorNeutral02,
    marginBottom: StyleTokens.spacingStackSm,
  },

  button: {
    alignItems: "center",
    borderRadius: StyleTokens.borderRadiusNone,
    paddingVertical: StyleTokens.spacingSquishXs[0],
    paddingHorizontal: StyleTokens.spacingSquishXs[1],
    backgroundColor: StyleTokens.colorBrandPrimary03,
    marginBottom: StyleTokens.spacingStackSm,
  },

  buttonText: {
    fontSize: StyleTokens.fontSizeSm,
    //   lineHeight: StyleTokens.lineHeightTight,
    fontFamily: renderNativeFont({
      fontFamily: StyleTokens.fontFamilyBase,
      fontWeight: StyleTokens.fontWeightSemiBold,
    }),
    color: StyleTokens.colorNeutral05,
  },
});
