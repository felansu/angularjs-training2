(function () {
    'use strict';

    angular
        .module('pdCurso')
        .directive('pdHelloWorld', pdHelloWorld);

    /* @ngInject */
    function pdHelloWorld() {
        var directive = {
            restrict: 'EA',
            template: '<b>Oi, como vai ?</b>'
        };
        return directive;

    }

})();

