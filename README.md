ember-color-palette
==============================================================================

Displays a color palette. Heavily inspired by https://github.com/chrislopresto/ember-freestyle.


Compatibility
------------------------------------------------------------------------------

* Ember.js v2.18 or above
* Ember CLI v2.13 or above


Installation
------------------------------------------------------------------------------

```
ember install ember-color-palette
```


Usage
------------------------------------------------------------------------------

```  handlebars
<!-- template.hbs -->
<ColorPalette @colors={{this.colors}} @title={{this.title}} @description={{this.description}}/>


<ColorPalette @colors={{this.colors}} as |cp|>
  {{cp.item}}
</ColorPalette>
```


Contributing
------------------------------------------------------------------------------

See the [Contributing](CONTRIBUTING.md) guide for details.


License
------------------------------------------------------------------------------

This project is licensed under the [MIT License](LICENSE.md).
