# Saporo - Node Navigator
### Authored by: [Ryan Carville](https://github.com/ryancarville)
---

This is a coding challenge created by the [Saporo](https://www.saporo.io) Frontend team to enable them to asses the interviewee's coding practices and style.  This coding challenge is designed to give you an idea of the daily work you’ll be doing with [Saporo](https://www.saporo.io), and to give you an opportunity to demonstrate how you think about implementing features and how you think about components in the UI.

### Tech Stack
- Svelte (Framework)
- TypeScript (Language)
- JavaScript (Language)
- HTML5 (Language)
- CSS5 (Language)

## Overview

This app is a Node Navigator where a list of nodes is rendered and can be expanded to learn more about a node and display all the other nodes that are directly connected to it.  It assumes the nodes received are a collection of objects and in this challenge it uses dummy data which can be found in the directory `src/data`.

## Live Demo
[Live Demo Site](https://saporo-node-navigator.vercel.app/)
## Get started (from initial repo clone)

Install the dependencies...

```bash
cd saporo-node-navigator
npm install
```

...then start [Rollup](https://rollupjs.org):

```bash
npm run dev
```

Navigate to [localhost:8080](http://localhost:8080). You should see the app running.

By default, the server will only respond to requests from localhost. To allow connections from other computers, edit the `sirv` commands in package.json to include the option `--host 0.0.0.0`.

If you're using [Visual Studio Code](https://code.visualstudio.com/) we recommend installing the official extension [Svelte for VS Code](https://marketplace.visualstudio.com/items?itemName=svelte.svelte-vscode). If you are using other editors you may need to install a plugin in order to get syntax highlighting and intellisense.

## Building and running in production mode

To create an optimized version of the app:

```bash
npm run build
```

You can run the newly built app with `npm run start`. This uses [sirv](https://github.com/lukeed/sirv), which is included in your package.json's `dependencies` so that the app will work when you deploy to platforms like [Heroku](https://heroku.com).