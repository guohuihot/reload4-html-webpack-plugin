# Reload4 HTML Webpack Plugin

This webpack 4 plugin utilises hooks emited by html-webpack-plugin and reloads
browser. This plugin is intended to be used only during development.

Supports webpack-dev-middleware.

This plugin uses port 8323 so make sure its free

## Usage

```javascript
// in webpack.config.js

var Reload4Plugin = require("reload4-html-webpack-plugin");

//

plugins: [new Reload4Plugin()];

//
```
