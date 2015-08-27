import {{name | camelCaseSnake}}Controller from './{{name}}.controller.js';
import {{name | camelCaseSnake}}Directive from './{{name}}.directive.js';

export default (app) => {
  app.controller('{{name | camelCaseSnake}}Controller', {{name | camelCaseSnake}}Controller);
  app.directive('{{name | camelCaseSnake}}', {{name | camelCaseSnake}}Directive);
}

