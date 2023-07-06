# Lesson 1 - Create an Astro Project

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

## Astro Project Structure

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

## The `.astro` file type

If you're familiar with frameworks like React, Vue, or Svelte, this would
be an approximate equivalent of a `.jsx`/`.tsx`, `.vue` or `.svelte` file,
respectively.

## Page routing in `./src/pages`

> Note: If you've used frameworks like Next.js before, this will feel very similar.

Every `.astro` file created in this folder will become an individual page. So
far, we only have an `index.astro` page. However, Astro will also recognise
markdown `.md` files as pages too.

## Reusable components in `./src/components/`

Similar to other frameworks, we'll put our components here. We can already see a `Card.astro` one.

We can also use components from other frameworks here, which we'll explore in a later lesson.

## Running our app

Now that we've poked around a little, let's run our app:

    npm start

Should all be working correctly, you'll be able to open [`http://localhost:3000`](http://localhost:3000) and be greeted by your app!