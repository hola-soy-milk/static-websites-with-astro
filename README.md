# Lesson 1 - Create an Astro Project

## 01. Essential Concepts

In this tutorial, we'll use [Astro](astro.build) to build our static website.

Astro's `create astro` CLI tool offers loads of options for getting up and running as quickly as needed.

We'll be using it for ours, too.

> Note: This course will be done in a local development environment but you can also [spin up a quick Astro project on Stackblitz](https://astro.new/basics?on=stackblitz).

```
npm create astro@latest 
```

You'll be asked to select a few things:

* A project (directory) name
* A template: we'll go with the sample files
* Whether to install dependencies: Sure, why not!
* TypeScript: Absolutely!
* Last question: TypeScript strictness level. We'll go with the default

After that, we're ready to start coding our Astro site!

### Astro Project Structure

Our generated project will have the following structure:

.
├── README.md
├── astro.config.mjs
├── package.json
├── public
│   └── favicon.svg
├── src
│   ├── components
│   │   └── Card.astro
│   ├── env.d.ts
│   ├── layouts
│   │   └── Layout.astro
│   └── pages
│       └── index.astro
└── tsconfig.json

Amongst others, we see a file type unique to Astro...

### The `.astro` file type

If you're familiar with frameworks like React, Vue, or Svelte, this would
be an approximate equivalent of a `.jsx`/`.tsx`, `.vue` or `.svelte` file,
respectively.
 
## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```
/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   └── Card.astro
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│       └── index.astro
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:3000`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).
