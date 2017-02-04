(function () {
    'use strict';

    angular
        .module('pdCurso')
        .controller('Index9Controller', IndexController);

    /* Não façam isto nas suas casas */

    /*@ngInject*/
    function IndexController($http, PdAlertService) {

        var vm = this;

        vm.listaDeDados = [];

        vm.carregarListaDeDados = carregarListaDeDados;


        iniciar();

        function iniciar() {
            configurarGrid();
        }

        function configurarGrid() {
            vm.gridOptions = {
                data: 'vm.listaDeDados'
            };
        }

        function carregarListaDeDados() {
            $http
                .get('https://jsonplaceholder.typicode.com/photos')
                .then(carregarListaDeDadosResult, carregarListaDeDadosFault);
        }

        function carregarListaDeDadosResult(response) {
            if (response.data) {
                vm.listaDeDados = response.data;
            } else {
                vm.listaDeDados = [];
            }
        }

        function carregarListaDeDadosFault(rejection) {
            PdAlertService.showError('Erro ao consultar lista de dados: ' + rejection);
        }

    }

})();