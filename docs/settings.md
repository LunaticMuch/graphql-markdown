---
sidebar_position: 5
---

# Settings

By default, the plugin will use the options as defined in the plugin's [configuration](/docs/configuration), but they can be overridden using CLI flags.

## `baseURL`

The base URL to be used by Docusaurus. It will also be used as folder name under [`rootPath`](#rootpath) for the generated documentation.

| Setting   | CLI flag               | Default  |
| --------- | ---------------------- | -------- |
| `baseURL` | `-b, --base <baseURL>` | `schema` |

## `diffMethod`

The method to be used for identifying changes in the schema for triggering the documentation generation.

The possible values are:

- `SCHEMA-DIFF`: use [GraphQL Inspector](https://graphql-inspector.com) for identifying changes in the schema (including description)
- `SCHEMA-HASH`: use the schema SHA-256 hash for identifying changes in the schema (this method is sensitive to white spaces and invisible characters)

| Setting      | CLI flag                  | Default       |
| ------------ | ------------------------- | ------------- |
| `diffMethod` | `-d, --diff <diffMethod>` | `SCHEMA-DIFF` |

<br/>

:::info
Use any other value to disable the change detection to force documentation generation, same as CLI flag `-f` or `--force`.
:::

## `docOptions`

Use these options to tweak some of the Docusaurus documentation features:

- `pagination`: page buttons `Previous` and `Next`
- `toc`: page table of content
- `index`: generate index page for categories/groups, see [Docusaurus documentation](https://docusaurus.io/docs/sidebar/items#generated-index-page)

| Setting                 | CLI flag         | Default |
| ----------------------- | ---------------- | ------- |
| `docOptions.pagination` | `--noPagination` | `true`  |
| `docOptions.toc`        | `--noToc`        | `true`  |
| `docOptions.index`      | `--index`        | `false` |

<br/>

```js {9-13}
plugins: [
    [
      "@graphql-markdown/docusaurus",
       {
        schema: "./schema/swapi.graphql",
        rootPath: "./docs",
        baseURL: "swapi",
        homepage: "./docs/swapi.md",
        docOptions: {
          pagination: false, // disable buttons previous and next, same as CLI flag --noPagination
          toc: false, // disable page table of content, same as CLI flag --noToc
          index: true, // enable generated index pages, same as CLI flag --index
        },
      },
    ],
  ],
```

## `groupByDirective`

Use a GraphQL directive for creating documentation categories (see [documentation categories](/docs/advanced/group-by-directive)).

| Setting            | CLI flag                                                                 | Default |
| ------------------ | ------------------------------------------------------------------------ | ------- |
| `groupByDirective` | <code>-gdb, --groupByDirective <@directive(field&#124;=fallback)></code> | -       |

## `homepage`

The location of the landing page to be used for the documentation, relative to the current workspace (see [custom homepage](/docs/advanced/homepage)). The file will be copied at the root folder of the generated documentation.

The plugin provides a default page in `assets/generated`.

| Setting    | CLI flag                    | Default        |
| ---------- | --------------------------- | -------------- |
| `homepage` | `-h, --homepage <homepage>` | `generated.md` |

:::info
The GraphQL-Markdown template for Docusaurus provides a customized homepage located at `static/index.md`.
:::

## `linkRoot`

The root for links in documentation. It depends on the entry for the schema main page in the Docusaurus sidebar.

| Setting    | CLI flag                | Default |
| ---------- | ----------------------- | ------- |
| `linkRoot` | `-l, --link <linkRoot>` | `/`     |

## `loaders`

GraphQL schema loader to be used (see [schema loading](/docs/advanced/schema-loading)).

| Setting   | CLI flag        | Default                                                     |
| --------- | --------------- | ----------------------------------------------------------- |
| `loaders` | _not supported_ | `{GraphQLFileLoader: "@graphql-tools/graphql-file-loader"}` |

## `printTypeOptions`

Use these options to toggle type information rendered on pages:

- `parentTypePrefix`: prefix field names with parent type name
- `relatedTypeSection`: display related type sections
- `typeBadges`: add field type attributes badges

| Setting                               | CLI flag          | Default |
| ------------------------------------- | ----------------- | ------- |
| `printTypeOptions.parentTypePrefix`   | `--noParentType`  | `true`  |
| `printTypeOptions.relatedTypeSection` | `--noRelatedType` | `true`  |
| `printTypeOptions.typeBadges`         | `--noTypeBadges`  | `true`  |

<br/>

```js {9-13}
plugins: [
    [
      "@graphql-markdown/docusaurus",
       {
        schema: "./schema/swapi.graphql",
        rootPath: "./docs",
        baseURL: "swapi",
        homepage: "./docs/swapi.md",
        printTypeOptions: {
          parentTypePrefix: false, // disable parent prefix, same as CLI flag --noParentType
          relatedTypeSection: false, // disable related type sections, same as CLI flag --noRelatedType
          typeBadges: false, // disable type attribute badges, same as CLI flag --noTypeBadges
        },
      },
    ],
  ],
```

## `pretty`

Use [`prettier`](https://prettier.io) to format generated files.

| Setting  | CLI flag   | Default |
| -------- | ---------- | ------- |
| `pretty` | `--pretty` | `false` |

<br/>

:::info
The `prettier` package has to be installed separately. If the package is not present locally, then the formatting will always be skipped.
:::

## `rootPath`

The output root path for the generated documentation, relative to the current workspace. The final path will be `rootPath/baseURL`.

| Setting    | CLI flag                | Default  |
| ---------- | ----------------------- | -------- |
| `rootPath` | `-r, --root <rootPath>` | `./docs` |

## `schema`

The GraphQL schema location.

:::info
By default, the schema default loading expects a local schema definition file (\*.graphql). But additional GraphQL document loaders can be used (see [schema loading](/docs/advanced/schema-loading)).
:::

| Setting  | CLI flag                | Default            |
| -------- | ----------------------- | ------------------ |
| `schema` | `-s, --schema <schema>` | `./schema.graphql` |

## `tmpDir`

The folder used for storing schema copy and signature used by [`diffMethod`](#diffmethod) setting.

| Setting  | CLI flag             | Default          |
| -------- | -------------------- | ---------------- |
| `tmpDir` | `-t, --tmp <tmpDir>` | _OS temp folder_ |
