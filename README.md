# @andreyvolokitin/parcel-transformer-js-handlebars

Transform handlebars templates to JS files, exporting a template as a string.

## Installation
```
npm install -D @andreyvolokitin/parcel-transformer-js-handlebars
```

## Usage
Add it to your `.parcelrc`:

```
{
  "extends": ["@parcel/config-default"],
  "transformers": {
    "your-prefix:*.hbs": ["@andreyvolokitin/parcel-transformer-js-handlebars"],
  },
}
```

Import using Parcel 2 [named pipelines](https://v2.parceljs.org/configuration/plugin-configuration/#named-pipelines):

```js
import template from "your-prefix:./template.hbs";
```