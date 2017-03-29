require('angular').module('qookiescode')
	.controller('PcodeController', [
		'$state',
		'$scope',
		'$rootScope',
		'Parse',
		'User',
		'CouponUser',
		function($state, $scope, $rootScope, Parse, User, CouponUser) {
			'use strict';

			var self = this,
				user,
				couponUser;


			self.hello = 'hello';

			$scope.pageClass = 'page-pcode';
			// Parse.User.logOut();

			angular.extend($scope, {
				user: {
					CouponUser: {
						username: '',
						email: '',
						birthday: '',
						used: '',
					}
				}
			});

			// var query = new Parse.Query(CouponUser);
			// query.get($state.params.CouponUserId).then(function(couponUser) {
			// 	// console.log(CouponUserId);
			// 	$scope.CouponUser.id = couponUser.id;
			// 	$scope.CouponUser.name = couponUser.username;
			// }, function(error) {
			// 	console.log(error);
			// });


		}
	]);
