# Color Palette

<h2> Default usage </h2>
{{#docs-demo as |demo|}}
  {{#demo.example name='color-palette.hbs'}}
    <ColorPalette 
        @colors={{this.colors}}
        @title="Blue Palette"
        @description="Various shades of blue"/>
  {{/demo.example}}
  {{demo.snippet 'color-palette.hbs'}}
  {{demo.snippet name='color-data.js' title='dummy/controller/docs/usage.js'}}
{{/docs-demo}}

<h2> Advanced usage </h2>

<DocsDemo as |demo|>
  {{#each flashMessages.queue as |flash|}}
    {{#flash-message flash=flash as |component flash|}}
      <h3 style="color: green">{{flash.message}}</h3>
    {{/flash-message}}
  {{/each}}

  {{#demo.example name="color-palette-component-demo.hbs"}}

    <ColorPalette class="color-palette-component-demo" @colors={{this.colors}} as |cp|>
      {{#copy-button clipboardText=cp.color.base title="copy to clipboard" success=(action "onCopy")}}
        <CustomColorItem @color={{cp.color.base}}>
          <span> {{cp.color.name}} ( {{cp.color.base}} ) </span>
        </CustomColorItem>
      {{/copy-button}}
    </ColorPalette>

  {{/demo.example}}
  {{demo.snippet "color-palette-component-demo.hbs"}}
  {{demo.snippet title="custom-color-item component" name="custom-color-item-component.js"}}
  {{demo.snippet title="dummy/controller/docs/components/color-palette.js" name="color-palette-controller.js"}}
</DocsDemo>
