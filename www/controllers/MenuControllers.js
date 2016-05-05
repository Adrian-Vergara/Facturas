/**
 * Created by Adrian on 05/05/2016.
 */
(function(){
    'use strict';

    angular.module('starter')
        .controller('MenuController', MenuController);

    function MenuController($ionicHistory, $state, $ionicSideMenuDelegate, $scope)
    {
        var vm = this;

        $ionicHistory.nextViewOptions({
            disableBack: true
        });
        /*vm.toggleLeft = function(){
            alert("Left");
            $ionicSideMenuDelegate.toggleLeft();
        };
        vm.ocultar = function(){
            $("#opaco").fadeOut();
        };

        vm.mostrar = function(){
        };

        vm.cerrar_sesion = function(){
            localStorage.clear();
            $state.go('login');
        };*/

        //Codigo para recargar datos de un controller
        /*$scope.$on('$ionicView.enter', function () {
            _init();
        });*/
    }
})();
