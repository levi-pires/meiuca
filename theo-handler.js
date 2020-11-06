const theo = require("theo");
const { writeFileSync } = require("fs");
const { format } = require("prettier");
const { spawn } = require("child_process");
const { default: Axios } = require("axios");

// Criação do transformador personalizado

const isOneOf = (item) =>
  item === "unit" || item === "number" || item === "size";

theo.registerValueTransform(
  "fixedSize/number",
  (prop) => isOneOf(prop.get("type")),
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

// object/jsObject é derivado de uma ideia descartada mas permanece para uso futuro

theo.registerValueTransform(
  "object/jsObject",
  (prop) => prop.get("type") === "object",
  (prop) => {
    let { entries } = prop.get("value")._root;

    entries = entries.map((item) => {
      let name = item[0];

      while (name.includes("-")) {
        const postHyphenStr = name[name.indexOf("-") + 1];

        name = name.replace(/-./, postHyphenStr.toUpperCase()).replace("-");
      }

      return [name, item[1]];
    });

    return Object.fromEntries(entries);
  }
);

theo.registerTransform("native", [
  "color/hex",
  "relative/pixel",
  "percentage/float",
  "fixedSize/number",
  "object/jsObject",
]);

// ------------------------------------------------------------------------------
// Conversão dos tokens em um arquivo ts utilizável

console.log("Creating src/tokens/index.ts\n");

const result = theo.convertSync({
  transform: {
    type: "native",
    file: "./tokens/tokens.yml",
  },
  format: {
    type: "module.js",
  },
});

writeFileSync(
  __dirname + "/src/tokens/index.ts",
  format(result, { parser: "typescript" })
);

// -------------------------------------------------------------------------------
// Download e link das fontes

console.log("Downloading fonts using wget");

const fonts = theo.convertSync({
  transform: {
    type: "raw",
    file: "./tokens/fonts/index.yml",
  },
  format: {
    type: "common.js",
  },
});

const fontResult = Object.values(eval(fonts));

for (let i = 0; i < fontResult.length; i++) {
  const item = fontResult[i];

  console.log(`   - ${item.local.split("-").join(" ")}`);

  const wget = spawn("wget", [
    "-O",
    `./assets/fonts/${item.local}.${item.format}`,
    item.src,
  ]);

  wget.stderr.on("error", (chunk) => {
    console.log(chunk.toString("utf-8"));
    process.exit(1);
  });

  wget.on("error", console.log);

  wget.on("close", () => {
    if (i + 1 == fontResult.length) {
      console.log("\nLinking fonts using yarn\n");

      const yarn = spawn("yarn", ["react-native", "link"]);

      yarn.stderr.on("data", (chunk) => console.log(chunk.toString("utf-8")));

      yarn.on("error", console.log);

      yarn.on("close", (code) =>
        console.log("Process executed with exit code " + code)
      );
    }
  });
}
