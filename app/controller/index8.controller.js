(function () {
    'use strict';

    angular
        .module('pdCurso')
        .controller('Index8Controller', IndexController);

    function IndexController($scope, $state) {

        $scope.alterarRota = alterarRota;

        function alterarRota(state) {
            $state.go(state);
        }

    }

})();