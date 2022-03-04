# ce

`ce` is our monorepo containing some core projects. It is managed
using `Nx`, so we recommend you install `Nx` globally.

```
$ npm install -g nx
```

You can then run targets using nx commands, for example, to start the GraphQL
server, just do

```
$ nx serve graphql
```

You can find various packages in `packages` folder. Generally speaking, if a
package ends with `-app`, you do not want to import from it. Otherwise, it is
safe to do so.

For package specific documentations, please refer to READMEs in individual packages.


# Learn More
Nx: https://nx.dev/
