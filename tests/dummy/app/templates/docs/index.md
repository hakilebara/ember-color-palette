# Introduction

## Requirements

Ember-color-palette requires Ember v3.4 or higher.

You should still be able to use this addon with [ember-angle-bracket-invocation-polyfill](https://github.com/rwjblue/ember-angle-bracket-invocation-polyfill), however this has not been tested.


## Installation

```
ember install ember-color-palette
```

## Usage
{{#docs-demo as |demo|}}
  {{#demo.example name='palette-demo-basics.hbs'}}
    <ColorPalette @colors={{this.colors}} @title="Blue Palette" @description="Various shades of blue"/>
  {{/demo.example}}
  {{demo.snippet 'palette-demo-basics.hbs'}}
  {{demo.snippet name='color-data.js' title='dummy/controller/docs/usage.js'}}
{{/docs-demo}}
