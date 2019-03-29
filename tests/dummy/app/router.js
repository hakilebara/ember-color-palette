import AddonDocsRouter, { docsRoute } from 'ember-cli-addon-docs/router';
import config from './config/environment';

const Router = AddonDocsRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  docsRoute(this, function() {
    this.route('index')
    this.route('usage')
    this.route('components', function() {
      this.route('color-palette')
      this.route('color-palette-item')
    })
  });
});

export default Router;
