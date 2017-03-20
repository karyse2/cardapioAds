angular.module('cardapioADSApp', ['ngRoute']);

.config(function($routeProvider) {
    //rota para a tela de login
    $routeProvider.when('/', {
        templateUrl: 'view/login.html',
        controller:'loginCtrl'
    });

    $routeProvider.otherwise({redirectTo: '/'});
});
