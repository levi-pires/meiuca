# Desafio Meiuca

No desafio proposto, deveria ser entregue um app em React Native, que tivesse elementos estilizados com base nos Style Tokens (previamente repassados para mim) e que tivesse uma página que consumisse a Google News API.

Os Style Tokens foram entregues em arquivos '.yml' com o padrão [Theo](https://github.com/salesforce-ux/theo), sendo que a abordagem escolhida para tratar os Style Tokens foi com o uso de [CLI](https://github.com/levi-pires/meiuca/blob/main/theo-handler.js#L67) em tempo de desenvolvimento. Cada item foi transformado em uma [constante aplicável](https://github.com/levi-pires/meiuca/blob/main/src/tokens/index.ts) aos [styles](https://github.com/levi-pires/meiuca/blob/main/src/styles) do RN. O único problema foi a fonte, que funciona de modo diferente no React Native e, portanto, teve que ser aplicada de forma diferente -- [CLI](https://github.com/levi-pires/meiuca/blob/main/theo-handler.js#L87) | [Font Render](https://github.com/levi-pires/meiuca/blob/main/src/fonts/index.ts). Além disso, foi criado o arquivo `archivo.yml` e seu respectivo arquivo de indexação para servir o que nomeei de [Font Render Metadata](https://github.com/levi-pires/meiuca/blob/main/tokens/fonts/).

Pode ser criado, ainda, uma ferramenta para transformar os links de importação de fontes (`https://fonts.googleapis.com/css2?family=Archivo:ital,wght@0,400;1,600&display=swap`) em Font Render Metadata, adicionando praticidade.

O APK pode ser acessado na [release page](https://github.com/levi-pires/meiuca/releases/tag/android-v1.1)

## Demos

### CLI

![cli demo](https://raw.githubusercontent.com/levi-pires/meiuca/main/demo/cli.gif)

### App

![app demo](https://raw.githubusercontent.com/levi-pires/meiuca/main/demo/app.gif)
