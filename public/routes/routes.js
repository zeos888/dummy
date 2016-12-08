/**
 * Created by alxev on 07.12.2016.
 */
angular.module('dummy', ['ngRoute', 'ngTable']);

angular.module('dummy').config(function ($routeProvider) {
    $routeProvider.when('/', {
        templateUrl: 'routes/main/main.html',
        controller: 'MainController'
    }).otherwise({
        redirectTo: '/'
    });
});