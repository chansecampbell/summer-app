import angular from 'angular';
import MainController from './controller.js';

export default angular.module('app.main', [])
       .controller('MainController', MainController)
       .name;
