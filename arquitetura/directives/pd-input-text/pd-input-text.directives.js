(function () {
    'use strict';

    angular
        .module('pdCurso')
        .directive('pdInputText', pdInputText);

    /* @ngInject */
    function pdInputText() {
        var directive = {
            restrict: 'E',
            require: '^form',
            templateUrl: 'arquitetura/directives/pd-input-text/pd-input-text.html',
            link: link,
            scope: {
                label: '@',
                ngModel: '=',
                ngRequired: '=',
                colspan: '@'
            }
        };
        return directive;

        function link($scope, element, attrs, formCtrl) {
            $scope.formCtrl = formCtrl;
            $scope.classColspan = 'col-md-' + ($scope.colspan || '3');
            $scope.inputName = 'pdInputText' + $scope.id;
        }
    }

})();

