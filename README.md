# TypeScript React Chrome v3 Manifest Extension Boilerplate

A basic TypeScript, Rollup, React boilerplate setup for making a browser
extension with Manifest v3.

## Development

For development with automatic reloading:

```sh
yarn start
```

Open the [Extensions Dashboard](chrome://extensions), enable "Developer mode",
click "Load unpacked", and choose the `dist` folder.

When you make changes in `src` the background script and any content script will
reload automatically.

## Production

When it's time to publish your Chrome extension, make a production build to
submit to the Chrome Web Store. This boilerplate will use the version in
`package.json`, unless you add a version to `src/manifest.json`.

> Make sure you have updated the name and version of your extension in
> `package.json`.

Run the following line:

```sh
yarn build
```

This will create a ZIP file with your package name and version in the `releases`
folder.
