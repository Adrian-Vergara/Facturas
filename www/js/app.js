(function () {
  'use strict';

    angular.module('starter', ['ionic'])

        .run(function($ionicPlatform) {
          $ionicPlatform.ready(function () {
            if (window.cordova && window.cordova.plugins.Keyboard) {

              cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
              cordova.plugins.Keyboard.disableScroll(true);
            }
            if (window.StatusBar) {
              StatusBar.styleDefault();
            }
          })
        })
        .config(function($stateProvider, $urlRouterProvider) {
            $urlRouterProvider.otherwise('/app/facturas');

            $stateProvider

                .state('app', {
                    url: '/app',
                    abstract: true,
                    templateUrl: 'templates/menu.html',
                    controller: 'MenuController as menu'
                })
                .state('app.facturas', {
                    url: '/facturas',
                    views: {
                        'menuContent': {
                            cache: false,
                            templateUrl: 'templates/facturas.html',
                            controller: 'FacturaController as factura'
                        }
                    }
                });
        })
})();