(function () {
    'use strict';

    angular
        .module('pdCurso')
        .directive('pdInputText', pdInputText);

    /* @ngInject */
    function pdInputText() {
        var directive = {
            restrict: 'E',
            templateUrl: 'arquitetura/directives/pd-input-text/pd-input-text.html',
            link: link,
            scope: {
                label: '@',
                ngModel: '=',
                ngRequired: '='
            }
        };
        return directive;

        function link(scope, element, attrs) {

        }
    }

})();

