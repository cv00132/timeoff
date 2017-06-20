import angular from 'angular';
import 'angular-ui-router';
import 'angular-ui-calendar';
import 'angular-ui-bootstrap';

import Config from './config';
import SERVER from "./server";

import LayoutController from './controller/layout';
import HomeController from './controller/home';
import EmployeesController from './controller/employees';
import RequestController from './controller/request';


angular
    .module('app', ['ui.router', 'ui.calendar', 'ui.bootstrap'])
    .config(Config)
    .constant('SERVER', SERVER)
    .controller('LayoutController', LayoutController)
    .controller('HomeController', HomeController)
    .controller('EmployeesController', EmployeesController)
    .controller('RequestController', RequestController)
;
