## Usage

Run

```bash
nvm use
npm i
npm run build:server
npm run build:client
```

Merge the files in the `dist/static` folder into the `main.js` file excluding `import/export` statements and then wrap the result in the following function

```javascript
(async function () {
  await Promise.all([
    import("https://unpkg.com/react@18/umd/react.development.js"),
    import("https://unpkg.com/react-dom@18/umd/react-dom.development.js"),
  ]);

  // Transpilation output goes here
})();
```

Put `React` and `ReactDOM` where required.

Run:

```bash
npm run dev
```

## Notes

- The server code needs to be transpiled since node can't use ESM
- To include React and ReactDOM code in the transpilation output is the responsibility of the bundler (among other stuff like HMR, code splitting... )
