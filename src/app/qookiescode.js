// require('modernizr');

var angular = require('angular');

require('angular-ui-router');
require('angulartics');


var app = angular.module('qookiescode', [
	'ui.router',
	'angulartics',
	require('angulartics-google-analytics'),
	require('angular-parse')
]);

require('./components');
require('./controllers');

app.config([
		'$stateProvider',
		'$urlRouterProvider',
		'$locationProvider',
		'ParseProvider',
		function($stateProvider, $urlRouterProvider, $locationProvider, ParseProvider) {
			'use strict';

			// For any unmatched url, redirect to /state1
			$urlRouterProvider.otherwise('/');

			$stateProvider
				.state('root', {
					'abstract': true,
					views: {
						header: {
							templateUrl: 'sections/root/header.html',
							controller: 'HeaderController as headerCtrl'
						},
						content: {
							template: '<main ui-view></main>'
						},
						footer: {
							templateUrl: 'sections/root/footer.html',
							controller: 'FooterController as footerCtrl'
						}
					}
				})
				.state('home', {
					url: '/',
					parent: 'root',
					templateUrl: 'sections/home/home.html',
					controller: 'HomeController as homeCtrl'
				})
				.state('login', {
					url: '/login',
					parent: 'root',
					templateUrl: 'sections/login/login.html',
					controller: 'LoginController as loginCtrl'
				})
				.state('users', {
					url: '/users',
					parent: 'root',
					templateUrl: 'sections/users/users.html',
					controller: 'UsersController as usersCtrl'
				});

			// use the HTML5 History API
			$locationProvider.html5Mode(true);

			var debug = false;

			ParseProvider.initialize('secretAppId', 'secretMasterKey');


			ParseProvider.initialize('FILbMBPZvcB5Ajm80jn5Zet7RFiLUCPCamrsTIVY', 'ZPi5Eq4zZYluyBCOIOjum23yFeiUDrgPSPoRsTCa');
			if (debug) {
				ParseProvider.serverURL = 'http://localhost:1337/1';
			} else {
				ParseProvider.serverURL = 'https://pg-app-lt6v09v8aw92m47ec4wcu9v9syfe6x.scalabl.cloud/1/';
			}

			ParseProvider.defineAttributes(ParseProvider.User, ['name', 'email', 'password', 'familyName']);
		}
	])
	.run(['$rootScope', '$document', function($rootScope, $document) {
		'use strict';




		/* global $ */

	}]);
