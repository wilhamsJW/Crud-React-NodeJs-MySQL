### Comando e algumas observações sobre o backend

## 1º comando: `npm init -y`

## 2º comando: `yarn add mysql cors nodemon` 
Adicionado mysql, cors e nodemon

## 3º comando para instalar o express: `$ npm install express --save`

## 4º comando para rodar o servidor sem atualizaçãoes automáticas: `node index.js`

## 5º comando para rodar servidor com atualizaçãoes automáticas: `yarn dev` ou `npm run dev`
isso serve para que o servidor rode de forma automática sem ter que ficar reiniciando a cada alteração
quem faz isso é a lib de desenvolvimento `nodemon` q foi instalada acima, para que o `nodemon` 
escute todas as alterações do meu servidor vá no `package.json` (arquivo q fica todas as libs)
e em `scripts` adicione esse comando: `"dev": "nodemon index.js"` e assim rode o servidor
com `yarn dev` ou `npm run dev`
