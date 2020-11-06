const fontWeights = {
  "100": "Thin",
  "200": "ExtraLight",
  "300": "Light",
  "400": "Regular",
  "500": "Medium",
  "600": "SemiBold",
  "700": "Bold",
  "800": "ExtraBold",
  "900": "UltraBold",
};

type FontWeights =
  | "100"
  | "200"
  | "300"
  | "400"
  | "500"
  | "600"
  | "700"
  | "800"
  | "900";

type FontSet = {
  fontFamily: string;
  fontWeight: FontWeights;
  isItalic?: true;
};

/**
 *
 * não testado no IOS
 */

export function renderNativeFont(fontSet: FontSet) {
  return `${fontSet.fontFamily}-${fontWeights[fontSet.fontWeight]}${
    fontSet.isItalic ? "-Italic" : ""
  }`;
}
