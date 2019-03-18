# Usage

## Basic
{{#docs-demo as |demo|}}
  {{#demo.example name='palette-demo-basics.hbs'}}
    <ColorPalette
        @colors={{this.colors}}
        @title="Blue Palette"
        @description="Various shades of blue"/>
  {{/demo.example}}
  {{demo.snippet 'palette-demo-basics.hbs'}}
  {{demo.snippet name='color-data.js' title='dummy/controller/docs/usage.js'}}
{{/docs-demo}}

<h2> Contextual </h2>

{{#docs-demo as |demo|}}
  {{#demo.example name='palette-demo-contextual.hbs'}}
    <ColorPalette @colors={{this.colors}} as |cp|>
      {{cp.item}}
    </ColorPalette>
  {{/demo.example}}
  {{demo.snippet 'palette-demo-contextual.hbs'}}
  {{demo.snippet name='color-data.js' title='dummy/controller/docs/usage.js'}}
{{/docs-demo}}
