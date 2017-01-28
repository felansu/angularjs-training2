angular
    .module('pdCurso', [
        'ngMessages',
        'ngAnimate',
        'toastr',
        'ui.grid',
        'ui.grid.selection',
        'ngMaterial',
        'ui.router'
    ]).config(function ($compileProvider) {

    // Correção de incompatibilidade angularjs 1.6
    $compileProvider.preAssignBindingsEnabled(true);
});