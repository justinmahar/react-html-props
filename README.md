<h2 align="center">
  <a href="https://github.com/justinmahar/react-kindling">🔥 React Kindling</a>
</h2>
<h3 align="center">
  A template to build, test, and share React components and hooks easily.<br/>Uses Storybook, Docz, and more.
</h3>
<p align="center">
  <a href="https://github.com/justinmahar/react-kindling/generate">
    <img src="https://img.shields.io/badge/GitHub-Use%20this%20template-brightgreen"/>
  </a>
  <a href="https://github.com/justinmahar/react-kindling/actions?query=workflow%3ATests">
    <img src="https://github.com/justinmahar/react-kindling/workflows/Tests/badge.svg" alt="Tests Status"/>
  </a>
  <a href="https://github.com/justinmahar/react-kindling/actions?query=workflow%3ADeploy">
    <img src="https://github.com/justinmahar/react-kindling/workflows/Deploy/badge.svg" alt="Deploy Status"/>
  </a>
</p>

## Overview

This is a starter for [React](https://reactjs.org/) component and [hook](https://reactjs.org/docs/hooks-intro.html) libraries.

Think of this template as the kindling for all of your React goodies you want to build and possibly share via [npm](https://www.npmjs.com/).

React Kindling includes everything you need to build a mature React library including a standalone documentation site via GitHub Pages ([see template demo](https://justinmahar.github.io/react-kindling/)).

Get started in three easy steps: [generate](https://github.com/justinmahar/react-kindling/generate), clone, and run `npm i && npm run setup`.

See the [10+ projects using React Kindling](https://github.com/justinmahar/react-kindling#projects-using-react-kindling), and build your own.

### Features include:

- **🚀 Starter component and hook**
  - A jumping-off point to speed up your development.
- **🧪 [Jest](https://jestjs.io/) tests**
  - Includes [react-testing-library](https://testing-library.com/react) and [react-hooks-testing-library](https://react-hooks-testing-library.com) examples to build from.
- **✨ [TypeScript](https://www.typescriptlang.org/) support**
  - For optional type checking and safety. Don't know TS? Just use JS until you [learn](https://www.typescriptlang.org/).
- **📋 [ESLint](https://eslint.org/) rules**
  - Use best practices, catch mistakes, and autoformat your code.
- **📖 [Storybook](https://storybook.js.org/) stories**
  - Example stories for a component and a hook. Visualize as you build.
- **👷 Zero-config [GitHub CI](https://help.github.com/en/actions/building-and-testing-code-with-continuous-integration/about-continuous-integration)**
  - GitHub will build and run your tests on every push, for free. It just works!
- **👓 [README template](https://github.com/justinmahar/react-kindling/blob/master/README.template.md)**
  - Just fill it out. Includes [npm version badge](https://badge.fury.io/for/js) and CI badges for street cred.
- **📜 [Docz](https://www.docz.site/) documentation**
  - Easily document and showcase your components and hooks. See the [starter demo](https://justinmahar.github.io/react-kindling/).
- **🌎 [GitHub Pages](https://pages.github.com/) pre-configuration**
  - Auto-deploy your documentation site to GitHub Pages for free with a single opt-in project config.
- **📦 Easy [npm publish](https://docs.npmjs.com/cli/publish)**
  - Build, version, and ship it to [npm](https://www.npmjs.com/) with one command: `npm run ship`
- And more!

## Quick Start

### Click the button below to get started with React Kindling:

<a href="https://github.com/justinmahar/react-kindling/generate"><img src="https://img.shields.io/badge/GitHub-Use%20this%20template-brightgreen"/></a>

You will be prompted for a repo name and description, and GitHub will do the rest.

**Note:** This approach is recommended over cloning or forking because [repositories created from a template](https://help.github.com/en/github/creating-cloning-and-archiving-repositories/creating-a-repository-from-a-template) start with a single commit and are not treated as forks, but instead as an entirely new project.

Then `git clone` your project once it's set up.

### Install dependencies

```
npm install
```

### Setup

React Kindling uses an interactive setup script to configure the project.

Just run:

```
npm run setup
```

And follow the prompts to set your project up.

### Use Storybook to develop your components and hooks

[Storybook](https://storybook.js.org/) lets you develop your React components and hooks in isolation. Each "storybook" is a file that contains "stories", which are just the different visual states of your component or hook.

You can run Storybook using:

```
npm start
```

Your browser will automatically open to [localhost:6006](http://localhost:6006/).

In `src/__stories__`, a story is provided for both the example component and hook. Use these as a starting point for your own components and hooks.

You will see your changes in Storybook immediately since it uses Webpack's hot module reloading.

### Write tests

The directory `src/__tests__` contains two example test files, one for a component and one for a hook.

There are [react-testing-library](https://testing-library.com/react) and [react-hooks-testing-library](https://react-hooks-testing-library.com) examples provided to build off of.

There is a single test to ensure your component or hook doesn't crash. Add more tests as you see fit.

You can run tests by running:

```
npm test
```

You can run tests in watch mode by running:

```
npm test:watch
```

### Export modules from `index.tsx`

Export anything you'd like to make available to the outside world in `index.tsx`.

These will be the modules that can be imported from your npm package after it's installed.

### Document with Docz

This starter includes [Docz](https://www.docz.site/), the easiest way to create React documentation.

Just add [MDX files](https://mdxjs.com/) next to your components and [Docz](https://www.docz.site/) will automatically find them and add them to your documentation site. Example MDX files are already present for the example component and hook in this template repository. Use those as a starting point.

Edit the MDX files in `src/__docz__` to change the Home doc page and license page.

Just run the following to start the Docz dev server:

```bash
npm run docz
```

Then visit [localhost:3000](http://localhost:3000) to see your documentation site.

#### Additional Docz Settings

- **Docz Menu**
  - The Docz menu is configured in `doczrc.js`. Remove, add, or change the menu items there.
- **favicon and Logo Image**
  - The Docz site favicon and logo are located in `public`. [Get a different icon here](https://favicon.io/emoji-favicons/).
  - Disable the favicon or logo in `src/gatsby-theme-docz/theme-additions-config.js`
- **Google Analytics**
  - Add a Google Analytics tracking ID to `src/gatsby-theme-docz/theme-additions-config.js`. Disabled by default.
- **Google Site Verification**
  - Verify ownership in [Google Search Console](https://search.google.com/search-console/) via the HTML tag verification method. Paste the content value in `src/gatsby-ssr.js`.
- **Docz Footer**
  - Add a personalized footer to Docz in `src/gatsby-theme-docz/theme-additions-config.js`. Disabled by default.

### Deploy to GitHub Pages

With a single project setting, you can auto-deploy your Docz documentation to [GitHub Pages](https://pages.github.com/) for free.

A [GitHub Action](https://github.com/features/actions) has already been configured for you in `.github/deploy.yml`.

Just add an access token to authorize GitHub to build and deploy your Docz static site for you.

#### To enable GitHub Pages deploys:

- Create a `repo`-scoped [Personal access token](https://github.com/settings/tokens).
- Add the token to your GitHub project: **Settings » Secrets**. Name it: `ACCESS_TOKEN`
- Now, when you push code, your project's documentation will be built and deployed to GitHub Pages automatically. 🎉

Link to your Docz site and deploy status are available in the template README. If this is your first deploy, it can take up to 10 minutes for your GitHub Pages site to show up.

### npm Publish Checklist

About to wrap up and publish to npm? Double-check the following:

- No unwanted `console.log` calls
- Code is fully documented
- Links in Docz are not broken (use a browser extension)
- All tests pass
- **Most important: Components and hooks are exported from `src/index.tsx`**
  - If you forget to export, none of your hard work will be available via npm!

### Publish to npm

When you're finished developing, you can easily ship it to npm with one command. Once published to npm, others can install and use your package with `npm install`.

If you haven't already, log into npm:

```
npm login
```

Then publish with a single command:

```
npm run ship
```

This command will build your project, add/commit the freshly built `dist` directory, increment the package version, publish to npm, and push to GitHub.

If you have any unsaved changes, this script will immediately fail until your working directory is clean.

### Celebrate!

You've done it! Your project is ready for the world.

## Projects Using React Kindling

The following projects were built on React Kindling:

- [react-analytics-charts](https://justinmahar.github.io/react-analytics-charts)
- [react-super-seo](https://justinmahar.github.io/react-super-seo)
- [react-bootswatch-select](https://justinmahar.github.io/react-bootswatch-select)
- [react-build-status-badge](https://justinmahar.github.io/react-build-status-badge)
- [react-authless-admin](https://justinmahar.github.io/react-authless-admin)
- [react-timed-renderer](https://justinmahar.github.io/react-timed-renderer)
- [react-timed-image](https://justinmahar.github.io/react-timed-image)
- [react-uncached-image](https://justinmahar.github.io/react-uncached-image)
- [react-use-analytics-api](https://justinmahar.github.io/react-use-analytics-api)
- [react-use-precision-timer](https://justinmahar.github.io/react-use-precision-timer)
- [react-use-window-localstorage](https://justinmahar.github.io/react-use-window-localstorage)
- [react-use-window-sessionstorage](https://justinmahar.github.io/react-use-window-sessionstorage)
- [react-use-window-scroll](https://justinmahar.github.io/react-use-window-scroll)

## Contributing

Open source software is awesome and so are you. 😎

Feel free to submit a pull request for bugs or additions, and make sure to update tests as appropriate. If you find a mistake in the docs, send a PR! Even the smallest changes help.

For major changes, open an issue first to discuss what you'd like to change.

See the development scripts below to get started.

## ⭐ Found It Helpful? [Star It!](https://github.com/justinmahar/react-kindling/stargazers)

If you found this project helpful, let the community know by giving it a [star](https://github.com/justinmahar/react-kindling/stargazers): [👉⭐](https://github.com/justinmahar/react-kindling/stargazers)

## Development Scripts

### `npm run build`

Deletes `dist` and rebuilds it using `tsc`.

### `npm run watch`

Watches for changes, recompiles with `tsc`.

### `npm run test` or `npm test`

Runs Jest tests.

### `npm run test:watch`

Runs Jest tests in watch mode. Saved changes will automatically rerun the tests.

### `npm run start` or `npm start`

Starts the Storybook server for local development.

### `npm run storybook`

Starts the Storybook server for local development.

### `npm run build-storybook`

Builds the server bundle for Storybook.

### `npm run deploy`

Builds the Docz static site and deploys it to GitHub Pages.

### `npm run ship`

Single command to build, commit, version, publish to npm, and push the project to GitHub.

Uses `-m "Build, version, and publish."` as the commit message for both `git` and `npm`.

Git working directory must be clean before running.

### `npm run docz`

Clears Docz cache and runs the Docz development server for working on documentation.

### `npm run docz:dev`

Runs the Docz development server for working on documentation.

### `npm run docz:build`

Builds the Docz documentation static site.

### `npm run docz:serve`

Serves up the Docz documentation build.

### `npm run docz:clean`

Deletes the Docz cache. This can be used to start fresh if there are cache issues.

## License

This project is covered under the [MIT License](https://en.wikipedia.org/wiki/MIT_License):

```
Copyright © 2020 Justin Mahar https://github.com/justinmahar

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```
