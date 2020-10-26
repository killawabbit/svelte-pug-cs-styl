<h1>Svelte Template with Pug, CoffeScript and Stylus
</h1>
<span style="display: flex;flex-direction:row;align-items:center;
align-content: space-between;">
  <a href="https://svelte.dev"><img src="https://raw.githubusercontent.com/sveltejs/svelte/master/site/static/svelte-logo.svg" width="100" height="100"></a>
  <a href="https://pugjs.org">
    <img src="https://cdn.rawgit.com/pugjs/pug-logo/eec436cee8fd9d1726d7839cbe99d1f694692c0c/SVG/pug-final-logo-_-colour-128.svg" width="100" height="100">
  </a>
  <a href="http://coffeescript.org/">
    <img src="https://raw.githubusercontent.com/jashkenas/coffeescript/master/documentation/site/icon.svg" width="90">
  </a>
  <a href="https://stylus-lang.com/">
    <img src="https://stylus-lang.com/img/stylus-logo.svg" width="120">
  </a>
</span>
<br />
<span align="center">
  <img alt="Version" src="https://img.shields.io/badge/version-0.5.0-blue.svg?cacheSeconds=2592000" />
  <a href="https://github.com/killawabbit/svelte-pug-cs-styl#readme" target="_blank">
</span>

> Modified [Svelte Official Template Starter](https://github.com/sveltejs/template) for writing code in Pug.js for markup, CoffeeScript for script and Stylus for style

## Features
Apart from the Svelte Official Template Starter this repo has the following features:

:globe_with_meridians: **Svelte PreProcessor** that includes support for many of the alternative languages that compiles down to the standard *HTML, Javascript (ES6+) and CSS*

:dog: **Pug.js** that gets rid of the brackets of *HTML*

:coffee: **CoffeScript** that unclutters *script*

:pen: **Stylus** that does the same for *style*

:eye: **VS Code snippets** for shortcuts to often used code blocks with the above languages in Svelte (so that you don't need to remember the special syntax)


## Motivation

***I'm a bit lazy*** and I like my code simple, tidy and neat. **That's why [Svelte](https://svelte.dev) is such a joy!**

***But why stop there?*** 
With the [Svelte preproccesor](https://github.com/sveltejs/svelte-preprocess) you can use [Pug.js](https://pugjs.org/) for markup, [CoffeeScript](http://coffeescript.org/) for script and [Stylus](https://stylus-lang.com/) for style

***Why Pug, CoffeeScript and Stylus you might ask.***
Pug takes away the brackets, uses indention for markup logic and is in my opinion clean code. Coffeescript does the same with coding script logic and Stylus also for style.

## VS Code

Like may others I use VS Code code editor. Besides being totally free it has a lot of extendability features and a large ecosystem of plugins. This repo is adapted to use with VS Code, but it's your choice if you do.

### Sugested Plugins for VS Code

- Obviously you should install [Svelte for VS Code](https://marketplace.visualstudio.com/items?itemName=svelte.svelte-vscode)
- If you like my VS Code 
Snippets you might also like [Svelte 3 Snippets by fivethree](https://marketplace.visualstudio.com/items?itemName=fivethree.vscode-svelte-snippets). I've written my snippets to fit in with those and possibly with time I will do adapted versions of all those snippets.
- [html2pug](https://marketplace.visualstudio.com/items?itemName=dbalas.vscode-html2pug) is useful in case you copy code examples a lot (I do)
- [Javascript to Coffeescript](https://marketplace.visualstudio.com/items?itemName=lucaprevi.js-to-coffee) for the same reason as above plugin
- [CSS to Stylus Converter](https://marketplace.visualstudio.com/items?itemName=konstantinkai.vscode-css-to-stylus) to also do the same as the two above for Stylus

### VS Code Snippets:

**As some sugar on top** I've added a few snippets for [VS Code](https://code.visualstudio.com/) to get you started even faster:

> ***s-t-pug-cs-styl*** - adds a Svelte File Template for PugJS as markup language, CoffeeScript for script and Stylus for style
***s-pug-if*** - adds a Svelte IF block Pug-style
***s-pug-if-else*** - adds a Svelte IF-ELSE block Pug-style
***s-pug-for*** - adds a Svelte FOR block Pug-style
***s-pug-each*** - adds a Svelte EACH block Pug-style
***s-pug-key*** - adds a Svelte KEY block Pug-style
***s-pug-await*** - adds a Svelte AWAIT block Pug-style
***s-pug-then*** - adds a Svelte THEN block Pug-style
***s-pug-catch*** - adds a Svelte CATCH block Pug-style
***s-pug-html*** - adds a Svelte HTML block Pug-style
***s-pug-debug*** - adds a Svelte DEBUG block Pug-style

### Caveats!

While the three featured languages in this starter template are supported in Svelte PreProcessor, not all their syntax will be recognised as valid in VS Code with the official svelte plugin. To escape any faulty nagging error messages you can turn of typescript diagnostics for the svelte plugin 

> **Svelte > Plugin > Typescript > diagnostics**

Thanks to **@dummdidumm** on **Svelte Discord #language-tools** for this soloution

## Examples
Do take a look at *main.js* and *App.svelte* files inside src/ to get a glimse of how your code could come to look. Neat, isn't it? :smiley:

<h3>Have fun!</h3> 

## Install

```sh
npx degit killawabbit/svelte-pug-cs-styl svelte-is-awesome
cd svelte-is-awesome
npm install
```

## Usage

```sh
npm run dev
```

## Author

👤 **Henrik Våglin**

* Twitter: [@henrik\_vaglin](https://twitter.com/henrik\_vaglin)
* Github: [@killawabbit](https://github.com/killawabbit)

## Show your support

Give a ⭐️ if this project helped you!

***
_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_