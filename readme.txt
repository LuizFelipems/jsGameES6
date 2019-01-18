Iniciando um projeto com node.js:
$ npm init

Instalando o Babel:
$ npm install --save-dev @babel/core @babel/cli

Chamando babel-cli através de um script:
No package.json inserir:
"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "build": "babel app-src -d app --source-maps",
    "watch": "babel app-src -d app --source-maps --watch"
},
*OBS: app-src é o diretório do arquivo a ser convertido, 
e o app é diretório criado pelo Babel com o arquivo já convertido.


Dentro da pasta principal, pelo terminal, execute o build:
$ npm run build -> compila a aplicação
$ npm run watch -> compila a aplicação automáticamente após salvar alterações

Instalando e configurando o preset do Babel para converter o js à versões anteriores:
$ npm install -S @babel/preset-env

Criar o arquivo de configuração: .babelrc e inserir o código abaixo:
"presets": [
    ["@babel/preset-env", {
    "targets": {
        "browsers": ["last 2 versions"]
    }
    }]
]







Bibliografias
Configurando o Babel 7x
http://cangaceirojavascript.com.br/babel-7-configuracao-uso-presets-plugins/
