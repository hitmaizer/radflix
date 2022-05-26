# Radflix 

Radflix is a simple Netflix clone, but it's themed around extreme sports, to create an extreme sports movies hub.<br> 
There are Skateboarding, Snowboarding, Surf, BMX, and Surfing movies.<br> 
This app was created, not only as a way to practice my skills but also to simulate a professional work 
environment.
WIP.

![radflix](https://user-images.githubusercontent.com/58346965/170453957-57a5b6d3-d636-4ec6-9eb1-fa1a5ecaf5e6.png)

## What's inside?

This turborepo uses [Yarn](https://classic.yarnpkg.com/lang/en/) as a package manager. It includes the following packages/apps:

### Apps and Packages

- `web`: a [Next.js](https://nextjs.org) app, handles the Frontend of Radflix.
- `cms`: a [Strapi](https://strapi.io/) app, a Headless CMS, handles the Backend of Radflix.
- `ui`: a stub React component library with [Storybook](https://storybook.js.org/) shared by other applications
- `config`: `eslint` configurations (includes `eslint-config-next` and `eslint-config-prettier`)
- `tsconfig`: `tsconfig.json`s used throughout the monorepo

All Frontend packages/apps are 100% [TypeScript](https://www.typescriptlang.org/).

### Utilities

This monorepo uses some additional tools:

- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [ESLint](https://eslint.org/) for code linting
- [Prettier](https://prettier.io) for code formatting
- [Husky](https://typicode.github.io/husky/#/) git hooks, all commits were submitted to pre-commit and pre-push tests
- [Commitizen](https://commitizen-tools.github.io/commitizen/) with conventional changelog

## Frontend

The Frontend is a [Next.js](https://nextjs.org) app with [TypeScript](https://www.typescriptlang.org/), using [NextAuth.js](https://next-auth.js.org/) for authentication with Google Provider, handles state with [Redux Toolkit](https://redux-toolkit.js.org/) and data fetching is done mostly with [axios](https://axios-http.com/).<br>
Styling is done with CSS-in-JS's library [styled-components](https://styled-components.com/), [styled-system](https://styled-system.com/), [styled-icons](https://styled-icons.dev/) and some [Radix](https://www.radix-ui.com/) primitives.
It's currently hosted on [Vercel](https://vercel.com/).

## Backend

Radflix's backend is handled by a [Strapi](https://strapi.io/) app that provides a REST API that the frontend uses to fetch data. It's currently deployed to Heroku, so it will most likely take a second to awake up on the first request call.



