angular.module('qookiescode')
	.factory('CouponUser', [
		'Parse',
		function(Parse) {
			var CouponUser = Parse.Object.extend('CouponUser');
			Parse.defineAttributes(CouponUser, [
				'email',
				'username',
				'birthday',
				'createdAt',
				'updatedAt',
			]);

			return CouponUser;
		}
	]);
