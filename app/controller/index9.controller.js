(function () {
    'use strict';

    angular
        .module('pdCurso')
        .controller('Index9Controller', IndexController);

    /* Não façam isto nas suas casas */

    /*@ngInject*/
    function IndexController($http, PdAlertService, $q) {

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
            executarProcessamentoAssincrono()
                .then(function (data) {
                    if (data) {
                        vm.listaDeDados = data;
                    } else {
                        vm.listaDeDados = [];
                    }

                });
        }

        function carregarListaDeDadosFault(rejection) {
            PdAlertService.showError('Erro ao consultar lista de dados: ' + rejection);
        }

        function executarProcessamentoAssincrono() {
            var lista1 = null;
            var lista2 = null;

            var deferred = $q.defer();

            $http
                .get('https://jsonplaceholder.typicode.com/photos')
                .then(result1, carregarListaDeDadosFault);

            $http
                .get('https://jsonplaceholder.typicode.com/photos')
                .then(result2, carregarListaDeDadosFault);

            function result1(response) {
                lista1 = response.data;

                if (lista2) {
                    var array = vm.listaDeDados = lista1.concat(lista2);
                    deferred.resolve(array);
                }
            }

            function result2(response) {
                lista2 = response.data;

                if (lista1) {
                    var array = lista2.concat(lista1);
                    deferred.resolve(array);
                }
            }


            return deferred.promise;
        }

    }

})();