<h1 align="center"> REST API com NodeJS - Parte 2</h1>
<div align="center">
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" width="100px" />
</div>

## :mag: About:

Structure of a typescript api, already configured with eslint
<br>

## 👷 how to run it:

```bash
# clone the repository
git clone https://github.com/sameckmatheus/rest.api.v1.0.0.git

# open an IDE of your choice

# Add data to .env
# Create database in postgres with dump that was made available

# run yarn to install dependencies, after that, use yarn dev to start the server
yarn
yarn dev
```

<h2 align="center">API feita em javascript. Iniciando os estudos com Node JS.</h2>

<h3 algn="justify"> 
Mas, o que é uma API ?
</h3>
<div align="center">
  <p align="justify">
  As APIs são um conjunto de padrões que fazem parte de uma interface e que permitem a criação de plataformas de maneira mais simples e prática para desenvolvedores. A partir de APIs é possível criar softwares, aplicativos, programas e plataformas diversas. Por exemplo, apps desenvolvidos para celulares Android e iPhone (iOS) são criados a partir de padrões definidos e disponibilizados pelas APIs de cada sistema operacional.</p>
  <p align="justify">
  A sigla API deriva da expressão inglesa Application Programming Interface que, traduzida para o português, pode ser compreendida como uma interface de programação de aplicação. Ou seja, API é um conjunto de normas que possibilita a comunicação entre plataformas através de uma série de padrões e protocolos.</p>
  <p align="justify">
  Por meio de APIs, desenvolvedores podem criar novos softwares e aplicativos capazes de se comunicar com outras plataformas. Por exemplo: caso um desenvolvedor queira criar um aplicativo de fotos para Android, ele poderá ter acesso à câmera do celular através da API do sistema operacional, sem ter a necessidade de criar uma nova interface de câmera do zero. O mesmo acontece com aplicativos que utilizam os serviços de mapas por meio da API do Google Maps ou, ainda, nas integrações entre apps, como o Spotify e o Instagram, que possibilita compartilhar faixas nos Stories.</p>
</div>

<h3 algn="justify"> 
  O que temos de novo por aqui ?
</h3>
<div align="center">
  <img src="images/readme-restapi.png" width="100%">
  <p align="justify">
    Esta atualização do projeto consta com novas funcionalidaes como criptografia de passwords aprimorada juntamente com a utilização do JWT para a realização de autenticações através de tokens no padrão 'sha256'. Além de updates na área de controllers (User & Login) que permite uma melhora significativa no armazenamento dos dados coletados através do cadastro criado na primeira parte da aplicação, onde fizemos a utilização do MongoDB Compass para armazenar as informações e assim proporcionar um melhor entendimento da aplicação em si. A prózima atualização contará com ua inegração de multiplos bancos de dados (ex: mysql) além de uma integração com o Whatsapp, aguardem as cenas dos próximos capítulos...
  </p>
</div>

## Routes:

```bash
# Create user
Post: /add-user
```
