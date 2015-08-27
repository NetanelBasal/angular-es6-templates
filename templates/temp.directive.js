// @ngInject
export default () => {
  return {
    controller: '{{name | camelCaseSnake}}Controller as {{name | snakeToCamelCase}}',
    scope: {},
    bindToController: true,
    templateUrl: 'client/js/components/{{name}}/views/{{name}}.tpl.html',
    link: function() {
      console.log('im in {{name}}');
    }
  }
}
