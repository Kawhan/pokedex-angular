# Pokédex Angular

Aplicação web desenvolvida com **Angular 22** para listar Pokémon e visualizar detalhes individuais utilizando dados da PokéAPI.

## 📌 Sobre o projeto

Este projeto é uma Pokédex desenvolvida com Angular, com foco em praticar conceitos modernos do framework, como componentização, rotas, services, pipes, consumo de API externa e organização por domínio.

A aplicação permite visualizar uma listagem de Pokémon e acessar uma página de detalhes para cada item.

## 🚀 Tecnologias utilizadas

* Angular 22
* TypeScript
* HTML
* CSS
* RxJS
* Angular Router
* Vitest
* PokéAPI

## 📁 Estrutura do projeto

```bash
pokedex-angular/
├── .vscode/
├── public/
├── src/
│   ├── app/
│   │   ├── core/
│   │   │   ├── guards/
│   │   │   ├── interceptors/
│   │   │   ├── models/
│   │   │   │   ├── poke-list.model.ts
│   │   │   │   ├── poke-result.model.ts
│   │   │   │   └── pokemon.model.ts
│   │   │   └── services/
│   │   │       └── pokeService/
│   │   │           ├── poke.service.ts
│   │   │           └── poke.service.spec.ts
│   │   ├── features/
│   │   │   ├── details/
│   │   │   │   ├── details.css
│   │   │   │   ├── details.spec.ts
│   │   │   │   └── details.ts
│   │   │   └── list/
│   │   │       ├── card/
│   │   │       │   ├── card.css
│   │   │       │   ├── card.spec.ts
│   │   │       │   └── card.ts
│   │   │       ├── list.css
│   │   │       ├── list.spec.ts
│   │   │       └── list.ts
│   │   ├── shared/
│   │   │   └── components/
│   │   │   └── directives/
│   │   │   └── pipes/
│   │   │       ├── poke-img-pipe.ts
│   │   │       └── poke-img-pipe.spec.ts
│   │   ├── app.config.ts
│   │   ├── app.routes.ts
│   │   ├── app.css
│   │   ├── app.spec.ts
│   │   └── app.ts
│   ├── index.html
│   ├── main.ts
│   └── styles.css
├── angular.json
├── package.json
├── package-lock.json
├── tsconfig.json
├── tsconfig.app.json
└── tsconfig.spec.json
```

## 🧩 Funcionalidades

* Listagem de Pokémon
* Exibição de cards com imagem dos Pokémon
* Página de detalhes por Pokémon
* Consumo de API externa
* Organização de models, services, features e pipes
* Pipe customizado para tratar imagem dos Pokémon
* Rotas com Angular Router

## 🌐 API utilizada

Este projeto utiliza a **PokéAPI** para buscar dados dos Pokémon.

Documentação:

```text
https://pokeapi.co/
```

## ⚙️ Pré-requisitos

Antes de executar o projeto, é necessário ter instalado:

* Node.js
* npm

Para verificar as versões instaladas:

```bash
node -v
npm -v
```

## ▶️ Como executar o projeto

Clone o repositório:

```bash
git clone https://github.com/Kawhan/pokedex-angular.git
```

Acesse a pasta do projeto:

```bash
cd pokedex-angular
```

Instale as dependências:

```bash
npm install
```

Execute o servidor de desenvolvimento:

```bash
npm start
```

Ou, se preferir usar diretamente o Angular CLI:

```bash
ng serve
```

Depois acesse no navegador:

```text
http://localhost:4200/
```

## 🧪 Testes

Para executar os testes:

```bash
npm test
```

## 📦 Build

Para gerar a versão de produção:

```bash
npm run build
```

Os arquivos gerados ficarão na pasta:

```text
dist/
```

## 🛠️ Scripts disponíveis

```bash
npm start
```

Executa a aplicação em modo de desenvolvimento.

```bash
npm run build
```

Gera o build da aplicação.

```bash
npm run watch
```

Executa o build em modo de observação para desenvolvimento.

```bash
npm test
```

Executa os testes com Vitest.

## 👨‍💻 Autor

Desenvolvido por **Kawhan Laurindo**.

GitHub:

```text
https://github.com/Kawhan
```

## 📄 Licença

Este projeto ainda não possui uma licença definida.
