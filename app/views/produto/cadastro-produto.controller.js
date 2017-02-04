(function () {
    'use strict';

    angular
        .module('pdCurso')
        .controller('CadastroProdutoController', CadastroProdutoController);

    /*@ngInject*/
    function CadastroProdutoController($scope, PdAlertService, $rootScope, $stateParams) {
        var vm = this;

        vm.title = 'Cadastro de carro';

        vm.produto = {};

        init();

        function init() {
            var lista = $rootScope.listaProdutos;
            for (var i = 0; i < lista.length; i++) {
                if ($stateParams.id) {
                    vm.produto = lista[$stateParams.id];
                }
            }
        }

        vm.salvar = salvar;
        vm.limpar = limpar;
        vm.getStyleDaLinha = getStyleDaLinha;

        function salvar() {
            if ($scope.formProduto.$invalid) {
                angular.forEach($scope.formProduto.$error, function (errorFields) {
                    for (var i = 0; i < errorFields.length; i++) {
                        errorFields[i].$setTouched();
                    }
                });
                PdAlertService.showError('Verifica os campos.', 'Erro !');
                return;
            }

            if ($stateParams.id) {
                $rootScope.listaProdutos.splice($stateParams.id, 1);
            }

            $rootScope.listaProdutos.push(vm.produto);
            limpar();
            PdAlertService.showSuccess('Sucesso', 'O registro foi salvo');
        }

        function limpar() {
            vm.produto = {};
            angular.element('#descricao').focus();
            $scope.formProduto.$setUntouched();
        }


        function getStyleDaLinha(linhaSelecionada) {
            var style = {};
            if (linhaSelecionada.cor) {
                style.backgroundColor = linhaSelecionada.cor;
            }

            return style;
        }
    }

})();

