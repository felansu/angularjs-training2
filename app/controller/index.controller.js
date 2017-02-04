(function () {
    'use strict';

    angular
        .module('pdCurso')
        .controller('IndexController', IndexController);

    /* @ngInject */
    function IndexController($scope, PdAlertService, $filter) {

        var vm = this;

        vm.pessoa = {};
        vm.listaPessoas = [];

        vm.myDate = new Date();

        vm.gridOptions = {
            data: 'listaPessoas',
            enableColumnMenus: false,
            enableRowSelection: true,
            rowTemplate: 'templates/row-template.html',
            columnDefs: [
                {name: 'Nome', field: 'nome'},
                {name: 'Sobrenome', field: 'sobrenome', width: 250},
                {name: 'Sexo', field: 'sexo', width: 250},
                {
                    name: 'Data de Nascimento',
                    field: 'dataNascimento',
                    width: 250,
                    cellTemplate: 'templates/cell-template-date.html'
                },
                {
                    name: 'Ações',
                    width: 100,
                    cellTemplate: 'templates/cell-template-actions.html',
                    onClick: excluir
                }
            ]
        };

        vm.onClickBotao = onClickBotao;
        vm.outraFunction = outraFunction;

        vm.salvar = salvar;
        vm.limpar = limpar;
        vm.excluir = excluir;
        vm.editar = editar;
        vm.getStyleDaLinha = getStyleDaLinha;

        function onClickBotao() {
            console.log('Opa, funcao 1');
        }

        function outraFunction() {
            console.log('Opa, funcao 2');
        }

        function salvar() {
            if (vm.formPessoa.$invalid) {
                angular.forEach(vm.formPessoa.$error, function (errorFields) {
                    for (var i = 0; i < errorFields.length; i++) {
                        errorFields[i].$setTouched();
                    }
                });
                PdAlertService.showError('Verifica os campos.', 'Erro !');
                return;
            }

            var dataNascimentoFormatada = $filter('date')(vm.pessoa.dataNascimento, 'dd/MM/yyyy');

            vm.listaPessoas.push(vm.pessoa);
            limpar();
            PdAlertService.showSuccess(dataNascimentoFormatada);
        }

        function limpar() {
            $scope.pessoa = {};
            angular.element('#nome').focus();
            $scope.formPessoa.$setUntouched();
        }

        function excluir(index) {
            $scope.listaPessoas.splice(index, 1);
            PdAlertService.showSuccess('O registro foi excluido.', 'Sucesso !');
        }

        function editar(pessoa) {
            $scope.pessoa = pessoa;
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