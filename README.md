# 👋 Link Roamer

![Link Roamer Graphic!](./assets/graphic.png)

> Download this extension on the [Chrome Web store](https://chrome.google.com/webstore/detail/link-roamer/lgcgflalbmeodapiohjepkjlgipmhofe).

A browser extension for gathering, organizing, and inspecting all the links on a web page. This extension allows you to:

#### Inspect links

- Highlight broken links on a page (i.e. 404)
- Highlight unsecure links on a page (i.e. http)
- Quickly find, view, organize, and navigate to any links on a page

#### Organize links

- Group links by the domain name
- Create a tab group from a set of selected links
- Save a set of selected links as bookmarks

#### Interact with links

- Copy links to clipboard
- Open links in a new window or tab
- Open individual links in a background tab
- Export links as `json`, `text`, or `csv`

---

## Open source

This extension is open source and doesn't collect any information from users. It's free, and made available because I
like making useful things for the web. Please consider contributing with an idea, bug fix, or feature request.

## Local development

Before making edits you will need to build the extension locally and side load it as a developer extension to test any
changes.

#### 1. Clone the repo Clone the repo to your local machine and navigate into the root directory.

```shell
cd link-roamer
```

#### 2. Install dependencies SVG Gobbler uses yarn to build the necessary dependencies.

```shell
yarn
```

#### 3. Start and watch a build

For development with automatic reloading:

```bazaar
yarn start 
```

This will build to the `dist` folder. To load the extension, open the Extensions Dashboard, enable "Developer mode",
click "Load unpacked", and choose the `dist` folder.

When you make changes in src the background script and any content script will reload automatically.

---

## Contribute

Feel free to submit a pull request if you've made an improvement of some kind. This is an open source project and any
help is very appreciated.

