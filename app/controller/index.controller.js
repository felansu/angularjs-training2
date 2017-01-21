angular
    .module('pdCurso')
    .controller('IndexController', IndexController);

function IndexController($scope, PdAlertService, $filter) {

    // Declaração de variáveis
    $scope.pessoa = {};
    $scope.listaPessoas = [];

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