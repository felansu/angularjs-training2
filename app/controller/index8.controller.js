(function () {
    'use strict';

    angular
        .module('pdCurso')
        .controller('Index8Controller', IndexController);

    /*@ngInject*/
    function IndexController($state, $rootScope) {

        var vm = this;

        $rootScope.listaProdutos = [];

        vm.alterarRota = alterarRota;

        function alterarRota(state) {
            $state.go(state);
        }

    }

})();