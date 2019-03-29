import Controller from "@ember/controller";

export default Controller.extend({
  init() {
    this._super(...arguments);
    // BEGIN-SNIPPET color-data.js
    // controller.js
    const colors = [
      { name: "blue100", base: "#e8f5ff" },
      { name: "blue400", base: "#068dfe" },
      { name: "blue500", base: "#0890ff" },
      { name: "blue600", base: "#077ee0" },
      { name: "blue700", base: "#066fc4" },
      { name: "blue800", base: "#0765b3" }
    ];
    this.set("colors", colors);
   // END-SNIPPET
  }
});
