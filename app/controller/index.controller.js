angular
    .module('pdCurso')
    .controller('IndexController', IndexController);

function IndexController($scope) {

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
        $scope.listaPessoas.push($scope.pessoa);
        $scope.pessoa = {};
    }

    function limpar() {
        $scope.pessoa = {};
        angular.element('#itNome').focus();
    }

    function excluir(index) {
        $scope.listaPessoas.splice(index, 1);
    }

    function editar(pessoa) {
        $scope.pessoa = pessoa;
    }
}