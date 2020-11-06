# Desafio Meiuca

No desafio proposto, deveria ser entregue um app em React Native, que tivesse elementos estilizados com base nos Style Tokens (previamente repassados para mim) e que tivesse uma página que consumisse a Google News API.

Os Style Tokens foram entregues em arquivos '.yml' com o padrão [Theo](https://github.com/salesforce-ux/theo), sendo que a abordagem escolhida para tratar os Style Tokens foi com o uso de [CLI](https://github.com/levi-pires/meiuca/blob/main/theo-handler.js#L67) em tempo de desenvolvimento. Cada item foi transformado em uma [constante aplicável](https://github.com/levi-pires/meiuca/blob/main/src/tokens/index.ts) aos [styles](https://github.com/levi-pires/meiuca/blob/main/src/styles) do RN. O único problema foi a fonte, que funciona de modo diferente no React Native e, portanto, teve que ser aplicada de forma diferente -- [CLI](https://github.com/levi-pires/meiuca/blob/main/theo-handler.js#L87) | [Font Render](https://github.com/levi-pires/meiuca/blob/main/src/fonts/index.js). Além disso, foi criado o arquivo [archivo.yml](https://github.com/levi-pires/meiuca/blob/main/tokens/fonts/archivo.yml) e seu respectivo arquivo de indexação para servir de metadados para o Font Render.

Pode ser criado, ainda, uma ferramenta para transformar os links de importação de fontes (`https://fonts.googleapis.com/css2?family=Archivo:ital,wght@0,400;1,600&display=swap`) em Font Render Metadata.

O APK pode ser acessado na [release](https://github.com/levi-pires/meiuca/releases/tag/android-v1.1)

![cli demo](https://raw.githubusercontent.com/levi-pires/main/demo/cli.gif)

![app demo](https://raw.githubusercontent.com/levi-pires/main/demo/app.gif)