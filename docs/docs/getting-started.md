---
slug: /
title: Getting Started
---

## Installation

React95 Native is available as an [npm package](https://www.npmjs.com/package/react95-native).

## npm

To install and save your `package.json` dependencies, run:

```sh
// yarn
yarn react95-native

// npm
npm i react95-native
```

## Usage

Simply rap your app content with our custom ThemeProvider (more on the [theming](theming) section) with the theme of your choice... and you're ready to go! 🚀

```jsx
import React from 'react';
import { ThemeProvider, themes } from 'react95-native';

/* Pick a theme of your choice */
const { original } = themes;

const App = () => (
  <div>
    <ThemeProvider theme={original}>/* ... */</ThemeProvider>
  </div>
);

export default App;
```
