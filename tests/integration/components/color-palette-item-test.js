import { module, test } from "qunit";
import { setupRenderingTest } from "ember-qunit";
import { render } from "@ember/test-helpers";
import hbs from "htmlbars-inline-precompile";

const color = { name: "blue100", base: "rgb(232, 245, 255)" };

module("Integration | Component | color-palette-item", function(hooks) {
  setupRenderingTest(hooks);

  test("it renders", async function(assert) {

    this.set('color', color)
    await render(hbs`<ColorPaletteItem @color={{color}}/>`);

    await assert.dom('.ember-color-palette-item__color').hasStyle({
      "background-color": color.base
    })
    await assert.dom('.ember-color-palette-item__name').hasText(color.name)
    await assert.dom('.ember-color-palette-item__hex').hasText(color.base)

  });
});
