(function () {
    'use strict';

    angular
        .module('pdCurso')
        .controller('IndexController', IndexController);

    /*@ngInject*/
    function IndexController($scope) {
        var vm = this;

        vm.cssDaDiv = {};
        vm.cssDaDiv.width = '150px';
        vm.cssDaDiv.height = '150px';

        vm.classeCss = '';

        $scope.$watch('vm.cor', onWatchCor);

        function onWatchCor(newValue, oldValue) {
            if (newValue === oldValue) {
                return;
            }

            vm.cssDaDiv.backgroundColor = newValue;

            var newValueString = newValue.toString();

            if (newValueString === '1') {
                vm.classeCss = 'div1';
            } else if (newValueString === '2') {
                vm.classeCss = 'div2';
            } else {
                vm.classeCss = 'div3';
            }
        }
    }

})();