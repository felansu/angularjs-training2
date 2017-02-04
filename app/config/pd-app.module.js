(function () {
    'use strict';

    angular
        .module('pdCurso', [
            'ngMessages',
            'ngAnimate',
            'toastr',
            'ui.grid',
            'ui.grid.selection',
            'ngMaterial',
            'ui.router',
            'oc.lazyLoad'
        ]).config(compileProvider);

    /*@ngInject*/
    function compileProvider($compileProvider) {

        // Correção de incompatibilidade angularjs 1.6
        $compileProvider.preAssignBindingsEnabled(true);
    }

})();