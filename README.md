# GraphQL Documentation Generator for Docusaurus 2

This plugin generates a **Markdown documentation** from a **GraphQL schema**.

The documentation is generated for **Docusaurus 2** [docs feature](https://v2.docusaurus.io/docs/docs-introduction).

## Installation

### npm

```shell
npm install --save docusaurus2-graphql-doc-generator
```

### Yarn

```shell
yarn add docusaurus2-graphql-doc-generator
```

Then you add it in your site's `docusaurus.config.js`'s plugins option:

```js
module.exports = {
    // ...
    plugins: ['docusaurus2-graphql-doc-generator'],
};
```

## Configuration

You can define some or all of the plugin options directly at the plugin level in your site's `docusaurus.config.js`:

#### Plugin Options

```js
module.exports = {
  // ...
  plugins: [
    [
      "docusaurus2-graphql-doc-generator",
      {
        schema: "https://swapi.graph.cool/",
        rootPath: "./docs", // docs will be generated under './docs/swapi' (outputDocPath/baseURL)
        baseURL: "swapi",
        homePage: "./docs/swapi.md",
      },
    ],
};
```

Each option is described in the section [Options](#options).

#### Site Settings

You will also need to add a link to your documentation on your site. One way to do it is to add it to your site's navbar in `docusaurus.config.js`:

```js
module.exports = {
  // ...
  navbar: {
    links: [
      to: "/swapi/homepage", // adjust the location depending on your baseURL (see configuration)
      label: "SWAPI Schema", // change the label with yours
      position: "left",
  },
}
```

For more details about navbar, please refer to Docusaurus 2 [documentation](https://v2.docusaurus.io/docs/theme-classic/#navbar-links).

#### Sidebars Settings

A sidebar file `sidebar-schema.js` will be generated for the documentation, and you will need to add it to your site's `sidebars.js`:

```js
module.exports = {
  docsSidebar: [
      // ... your site's sidebar
  ],
  ...require(`./docs/swapi/sidebar-schema`)
}
```

##### Important

The sidebar path must be relative to the `sidebars.js` location. By default, the plugin provides a relative path from the root folder of Docusaurus.

> For example: if your `sidebars.js` is located under `./src` folder, then you need to go one level up in the path: `./../docs/swapi/sidebar-schema`

#### Home Page

If you decide to use your own home page for the GraphQL generated documentation, then use the page ID `schema`.

## Usage

The plugin adds a new command `graphql-to-doc` to the [Docusaurus CLI](https://v2.docusaurus.io/docs/cli).

```shell
npx docusaurus graphql-to-doc [schema] [rootPath] [baseURL] [homepage]
```

#### Options

By default, the plugin will use the options as defined in the plugin's [configuration](#configuration), but they can be overriden by passing them with the command.

| Name       | Default            | Description                                                                                                                                                                                                                                                                |
| ---------- | ------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `schema`   | `./schema.graphql` | The schema location. It should be compatible with the GraphQL Tools [schema loaders](https://www.graphql-tools.com/docs/schema-loading) (e.g. an URL, a GraphQL file, a JSON file...).                                                                                     |
| `rootPath` | `./docs`           | The output root path for the generated documentation, relative to the current workspace. The final path will be `rootPath/baseURL`                                                                                                                                         |
| `baseURL`  | `schema`           | The base URL to be used by Docusaurus. It will also be used as folder name under `rootPath` for the genrated documentation                                                                                                                                                 |
| `homepage` | `generated.md`     | The location of the landing page to be used for the documentation, relative to the current workspace. The file will be copied at the root folder of the generated documentation.<br />The plugin provides a [default page](assets/generated.md), but you can use your own. |

## Contributions

Contributions, issues and feature requests are very welcome. If you are using this package and fixed a bug for yourself, please consider submitting a PR!