require('angular').module('qookiescode')
	.controller('UsersController', [
		'$state',
		'$scope',
		'$rootScope',
		'Parse',
		'User',
		'CouponUser',
		function($state, $scope, $rootScope, Parse, User, CouponUser) {
			'use strict';

			var currentUser = Parse.User.current();
			if (currentUser) {
				// do stuff with the user
			} else {
				$state.go('login');
			}

			var self = this;
			// var currentUser = Parse.User.current();

			self.hello = 'hello';

			$scope.pageClass = 'page-users';

			angular.extend($scope, {
				user: currentUser,
				pageClass: 'page-users',
				CouponUsers: []
			});


			var query = new Parse.Query(CouponUser);
			query.find().then(function(CouponUsers) {
				$scope.CouponUsers = CouponUsers;
				console.log($scope.CouponUsers);
			});

			$scope.toggleTodo = function toggleTodo(CouponUser) {
				// if (CouponUser.used === true) {
				//     CouponUser.used = false;
				//     CouponUser.save();
				//
				// } else if (CouponUser.used === false) {
				//     CouponUser.used = true;
				//     CouponUser.save();
				//     console.log(CouponUser.used);
				// }
				// console.log(CouponUser.used);
				CouponUser.save();
			};

			self.logout = function() {
				$rootScope.currentUser = null;
				Parse.User.logOut();
				$state.go('login');
			};





		}
	]);
