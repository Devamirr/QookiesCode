require('angular').module('qookiescode')
	.controller('HomeController', [
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

			$scope.pageClass = 'page-home';
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

			$scope.text = false;
			self.sign = function sign(userModel) {
				console.log(couponUser);
				console.log('user signed up');
				couponUser = new CouponUser();
				couponUser.email = userModel.email;
				couponUser.username = userModel.username;
				couponUser.birthday = userModel.birthday;
				couponUser.used = false;
				$scope.text = true;
				couponUser.save().then(function(user) {
				},function(error){
					$scope.error = error.message;
				});
			};





		}
	]);
