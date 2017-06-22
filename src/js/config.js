function Config ($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('root', {
      abstract: true,
      templateUrl: 'templates/layout.tpl.html',
      controller: 'LayoutController as layoutVm'
    })
    .state('root.home', {
      url: '/home',
      templateUrl: 'templates/home.tpl.html',
      controller: 'HomeController as homeVm'
    })
    .state('root.employees', {
      url: '/employees',
      templateUrl: 'templates/employees.tpl.html',
      controller: 'EmployeesController as employeesVm'
    })
    .state('root.request', {
      url: '/request',
      templateUrl: 'templates/request.tpl.html',
      controller: 'RequestController as requestVm'
    })
    .state('root.requestById', {
      url: '/requestById/:id',
      templateUrl: 'templates/requestById.tpl.html',
      controller: 'RequestByIdController as requestByIdVm'
    })
    .state('root.page-not-found', {
      url: '/not-found',
      template: '<h1>404</h1><h2>Page not found.</h2>'
    });

  $urlRouterProvider.when('', '/home');
  $urlRouterProvider.otherwise('/not-found');
}

Config.$inject = ['$stateProvider', '$urlRouterProvider'];

export default Config;
