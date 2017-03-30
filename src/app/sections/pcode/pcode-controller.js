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
						objectId: '',
						username: '',
						email: '',
						birthday: '',
						used: '',
					}
				}
			});
			var query = new Parse.Query(CouponUser);
			console.log($state.params.CouponUserId)
			query.get($state.params.CouponUserId).then(function(couponUser) {
				console.log(couponUser);
				$scope.couponUser = {};
				$scope.couponUser.objectId = couponUser.id;
				$scope.couponUser.username = couponUser.username;
			}, function(error) {
				console.log(error);
			});


		}
	]);
