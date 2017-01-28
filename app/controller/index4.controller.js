(function () {
    'use strict';

    angular
        .module('pdCurso')
        .controller('IndexController', IndexController);

    IndexController.$inject = ['$scope'];

    function IndexController($scope) {

        $scope.cssDaDiv = {};
        $scope.cssDaDiv.width = '150px';
        $scope.cssDaDiv.height = '150px';

        $scope.classeCss = '';

        $scope.$watch('cor', onWatchCor);

        function onWatchCor(newValue, oldValue) {
            if (newValue === oldValue) {
                return;
            }

            $scope.cssDaDiv.backgroundColor = newValue;

            var newValueString = newValue.toString();

            if (newValueString === '1') {
                $scope.classeCss = 'div1';
            } else if (newValueString === '2') {
                $scope.classeCss = 'div2';
            } else {
                $scope.classeCss = 'div3';
            }
        }
    }

})();