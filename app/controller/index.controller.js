angular
    .module('pdCurso')
    .controller('IndexController', IndexController);

IndexController.$inject = ['$scope', 'PdAlertService', '$filter'];

function IndexController($scope, PdAlertService, $filter) {

    // Declaração de variáveis
    $scope.pessoa = {};
    $scope.listaPessoas = [];

    $scope.gridOptions = {
        data: 'listaPessoas',
        enableColumnMenus: false,
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

    // Publicação de funções
    $scope.onClickBotao = onClickBotao;
    $scope.outraFunction = outraFunction;

    $scope.salvar = salvar;
    $scope.limpar = limpar;
    $scope.excluir = excluir;
    $scope.editar = editar;

    // Declaração de funções
    function onClickBotao() {
        alert("Opa, funcao 1")
    }

    function outraFunction() {
        alert("Opa, funcao 2")
    }

    function salvar() {
        if ($scope.formPessoa.$invalid) {
            angular.forEach($scope.formPessoa.$error, function (errorFields) {
                for (var i = 0; i < errorFields.length; i++) {
                    errorFields[i].$setTouched();
                }
            });
            PdAlertService.showError('Verifica os campos.', 'Erro !');
            return;
        }

        var dataNascimentoFormatada = $filter('date')($scope.pessoa.dataNascimento, 'dd/MM/yyyy');

        $scope.listaPessoas.push($scope.pessoa);
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
}