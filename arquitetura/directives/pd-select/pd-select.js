(function () {
    'use strict';

    angular
        .module('pdCurso')
        .directive('pdSelect', pdInputText);

    /* @ngInject */
    function pdInputText() {
        var directive = {
            restrict: 'E',
            require: '^form',
            templateUrl: 'arquitetura/directives/pd-select/pd-select.html',
            link: link,
            scope: {
                label: '@',
                ngModel: '=',
                ngRequired: '=',
                colspan: '@',
                provider: '=',
                propriedadeValor: '@',
                propriedadeDescricao: '@'
            }
        };
        return directive;

        function link($scope, element, attrs, formCtrl) {
            $scope.formCtrl = formCtrl;

            $scope.propriedadeValor = $scope.propriedadeValor || 'valor';
            $scope.propriedadeDescricao = $scope.propriedadeDescricao || 'descricao';

            $scope.classColspan = 'col-md-' + ($scope.colspan || '3');
            $scope.inputName = 'pdSelect' + $scope.id;
        }
    }

})();

