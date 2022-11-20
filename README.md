# OPJS - Front End Web

<p align="center">
<img src="./src/assets/images/logo.svg" width="300px">

<br>

<p align="center">
  <a href="#user-content-o-que-é-o-waiterapp">Sobre</a> •
 <a href="#user-content-funcionalidades">Funcionalidades</a> •
 <a href="#user-content-build-e-run">Como executar</a>
</p>


![Capa do Projeto](./images/capa.png)


</p>

<br>

## O que é o WaiterApp?

<p align="center">
<img src="./src/assets/images/logo.svg" width="600px">
</p align="justify">

O WaiterApp foi um projeto desenvolvido durante o curso "O Poder do JavaScript", do [/maateusilva](https://github.com/maateusilva/). Esse repositório contém a aplicação web.

Feita com react e styled components, ela servirá como o front-end web cujo qual consumirá
a API feita nesse mesmo curso.

Há também um repositório para o app mobile do projeto, que se encontra aqui: [OPJS-APP](https://github.com/Vitor-Tx/opjs-app).

---

## Funcionalidades


<p align="center">
<img src="./images/mobile.gif" style="max-width: 150%">

<img src="./images/front-end.gif" style="max-width: 150%">

</p>

- Listagem de pedidos
- Atualização com pedidos novos(feitos no app) em tempo real com aviso na tela
- Alterar status de pedidos
- Cancelar pedidos

---


## Build e run

Se desejar executar o projeto localmente, você precisa criar um arquivo "keys.ts" na pasta raiz, cujo conteúdo é:

```typescript

export const ADDRESS = "<seu endereço IP(o que apareceu ao rodar o app mobile com o expo)>";

```

Além de, claro, estar também rodando localmente a API do projeto, a qual você pode encontrar nesse repositório: [OPJS-API](https://github.com/Vitor-Tx/opjs-api).

### Comandos para instalação

```bash

# Clone o rep
$ git clone https://github.com/Vitor-Tx/opjs-front-end.git

# Entre na pasta raiz
$ cd opjs-front-end

# Instale as depêndencias
$ npm i

# Rode o projeto(acesse http://localhost:5173/).
$ npm run dev
```

---



## Tecnologias utilizadas

- TypeScript
- React ⚛
- Styled Components 💅
- socket.io
- ESLint
- etc

[![licence mit](https://img.shields.io/badge/licence-MIT-blue.svg?style=flat-square)](https://github.com/Vitor-Tx/opjs-front-end/blob/master/LICENSE)


Feito por Vitor Teixeira. [Entre em contato!](https://www.linkedin.com/in/vitor-teixeira-eof/)

