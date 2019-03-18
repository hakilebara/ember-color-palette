import { module, test } from "qunit";
import { setupRenderingTest } from "ember-qunit";
import { render } from "@ember/test-helpers";
import hbs from "htmlbars-inline-precompile";

const colors = [
  { name: "blue100", base: "rgb(232, 245, 255)" },
  { name: "blue400", base: "rgb(6, 141, 254)" },
  { name: "blue500", base: "rgb(8, 144, 255)" },
  { name: "blue600", base: "rgb(7, 126, 224)" },
  { name: "blue700", base: "rgb(6, 111, 196)" },
  { name: "blue800", base: "rgb(7, 101, 179)" }
];

module("Integration | Component | color-palette", function(hooks) {
  setupRenderingTest(hooks);

  test("it renders", async function(assert) {
    this.set("colors", colors);

    await render(hbs`<ColorPalette @colors={{colors}}/>`);

    assert.dom(".ember-color-palette-item").exists({ count: 6 });

    await render(hbs`
      <ColorPalette @colors={{colors}} as |cp index|>
        <span data-test-color-palette={{index}}>
          {{cp.item}}
        </span>
      </ColorPalette>
      `);

    for (let step = 0; step < colors.length; step++) {
      await assert
        .dom(
          `[data-test-color-palette="${step}"] .ember-color-palette-item__color`
        )
        .hasStyle({
          "background-color": colors[step].base
        });
    }
  });
});
