// @ngInject
export default () => {
  return {
    controller: '{{name | camelCaseSnake}}Controller as {{name | snakeToCamelCase}}',
    scope: {},
    bindToController: true,
    template: require('./views/{{name}}.tpl.html')
  }
}
