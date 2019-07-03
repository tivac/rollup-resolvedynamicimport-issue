Dynamic imports in rollup are passed to the `resolveDynamicImport` plugin hook, but if the argument to the `import()` is a template literal the hook gets passed `undefined`.

```js
// resolveDynamicImport will get undefined
import(`./${file}`);

// resolveDynamicImport will get AST nodes
import("./" + file);
```

To see this, run `npm install` and `npm start`.
