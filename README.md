ember-color-palette
==============================================================================

<img src="https://travis-ci.org/hakilebara/ember-color-palette.svg?branch=master" alt="build status"/>

Displays a color palette. Heavily inspired by https://github.com/chrislopresto/ember-freestyle.


Compatibility
------------------------------------------------------------------------------

* Ember.js v3.4 or above
  Previous verions of ember will need to use [ember-angle-bracket-invocation-polyfill](https://github.com/rwjblue/ember-angle-bracket-invocation-polyfill)

* Ember CLI v2.13 or above


Installation
------------------------------------------------------------------------------

```
ember install ember-color-palette
```


Usage
------------------------------------------------------------------------------

```  handlebars
  // controller.js
  const colors = [
    { name: "blue100", base: "#e8f5ff" },
    { name: "blue400", base: "#068dfe" },
    { name: "blue500", base: "#0890ff" },
    { name: "blue600", base: "#077ee0" },
    { name: "blue700", base: "#066fc4" },
    { name: "blue800", base: "#0765b3" }
  ];


<!-- template.hbs -->
<ColorPalette @colors={{this.colors}} @title={{this.title}} @description={{this.description}}/>
```


Contributing
------------------------------------------------------------------------------

See the [Contributing](CONTRIBUTING.md) guide for details.


License
------------------------------------------------------------------------------

This project is licensed under the [MIT License](LICENSE.md).
