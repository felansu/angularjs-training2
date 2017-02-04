(function () {
    'use strict';

    angular
        .module('pdCurso')
        .controller('Index10Controller', IndexController);

    /*@ngInject*/
    function IndexController() {

        var vm = this;

        vm.pessoa = {};
        vm.sexo = [{valor: 'M', descricao: 'Masculino'}, {valor: 'F', descricao: 'Feminino'}];

    }

})();