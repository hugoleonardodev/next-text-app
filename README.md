# NextJS Typescript Boilerplate

Bootstrap a developer-friendly NextJS app configured with:

-   [Typescript](https://www.typescriptlang.org/)
-   Linting with [ESLint](https://eslint.org/)
-   Formatting with [Prettier](https://prettier.io/)
-   Linting, typechecking and formatting on by default using [`husky`](https://github.com/typicode/husky) for commit hooks
-   Testing with [Jest](https://jestjs.io/) and [`react-testing-library`](https://testing-library.com/docs/react-testing-library/intro)

## Preview

Preview the example live on [StackBlitz](http://stackblitz.com/):

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/vercel/next.js/tree/canary/examples/with-typescript-eslint-jest)

## Deploy your own

Deploy the example using [Vercel](https://vercel.com?utm_source=github&utm_medium=readme&utm_campaign=next-example):

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/git/external?repository-url=https://github.com/vercel/next.js/tree/canary/examples/with-typescript-eslint-jest&project-name=with-typescript-eslint-jest&repository-name=with-typescript-eslint-jest)

## How to use

Execute [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) with [npm](https://docs.npmjs.com/cli/init) or [Yarn](https://yarnpkg.com/lang/en/docs/cli/create/) to bootstrap the example:

```bash
npx create-next-app --example with-typescript-eslint-jest with-typescript-eslint-jest-app
# or
yarn create next-app --example with-typescript-eslint-jest with-typescript-eslint-jest-app
```

Deploy it to the cloud with [Vercel](https://vercel.com/new?utm_source=github&utm_medium=readme&utm_campaign=next-example) ([Documentation](https://nextjs.org/docs/deployment)).

## How to run

```bash
yarn install
yarn dev
```

## Features

-   Layout Material UI
-   Cabeçalho com logo e opções
-   Tabela listando personagens
-   Rota com detalhes do personagem
-   Api que retorna os episodeos de cada personagem
-   Skeleton Loading
-   Paginação

## To do

1) Usar outro approach na paginação com rotas dinamicas, passando Link como render item para o componente Pagination
2) Implementar uma página de Not Found customizada
3) Implementar testes unitários com Jest e Testing library (o ambiente foi configurado, mas não deu tempo de fazer os testes)
4) Implementar testes end-to-end com Cypress
5) Melhorar o layout e o CSS

## Considerações finais

Tive muito problema com o styled Components como engine do Material UI no início. Fui forçado a fazer com a engine do Emotion.
Depois, no final, descobri que o onChange do Pagination não está reconhecendo a função passada como callback.
Então o que eu consegui foi forçar com useEffect e addEventListeners pra conseguir executar a ideia da paginação com a API.
A outra ideia que eu tive foi criar rotas com auxílio da API do Next para só depois renderizar a página. Mas seria uma ideia errada no começo.
Visto que a própria API retorna o resultado com paginação para os personagens.

Fiquei feliz com o desafio. Estou disponível para início imediato.

Email: `hugoleonardo.dev@gmail.com`
Telefone/Zap: `31999699361`
[Linkedin](https://www.linkedin.com/in/hugo-leonardo-matosinhos-de-souza/)
[GitHub](https://github.com/hugoleonardodev)
