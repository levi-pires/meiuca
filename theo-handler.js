const theo = require("theo");
const { writeFileSync } = require("fs");

console.log("Init");

const isOneOf = (item) =>
  item === "unit" || item === "number" || item === "size";

theo.registerValueTransform(
  "fixedSize/number",
  (prop) =>
    isOneOf(
      prop.get("type")
    ) /* && prop.get("category") !== "spacing-squish" */,
  (prop) => {
    const item = `${prop.get("value")}`;

    let splitStr = item.split("px");

    if (splitStr.length > 1) {
      if (splitStr[splitStr.length - 1] === "") splitStr.pop();

      return splitStr.length < 2
        ? +splitStr.join("")
        : splitStr.map((item) => +item);
    }

    const parsed = prop.get("category") !== "font-weight" ? +item : item;

    return isNaN(parsed) ? item : parsed;
  }
);

theo.registerTransform("native", [
  "color/hex",
  "relative/pixel",
  "percentage/float",
  "fixedSize/number",
]);

const result = theo.convertSync({
  transform: {
    type: "native",
    file: "./tokens/tokens.yml",
  },
  format: {
    type: "module.js",
  },
});

// const parsedResult = result.split('-!-').map(item => item.slice(0, item.length - 2) + ' +"').join('')

writeFileSync(__dirname + "/src/tokens/index.ts", result);

console.log("Finish");
