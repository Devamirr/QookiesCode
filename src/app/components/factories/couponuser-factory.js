angular.module('qookiescode')
	.factory('CouponUser', [
		'Parse',
		function(Parse) {
			var CouponUser = Parse.Object.extend('CouponUser');
			Parse.defineAttributes(CouponUser, [
				'objectId',
				'email',
				'username',
				'used',
				'birthday',
				'createdAt',
				'updatedAt',
			]);

			return CouponUser;
		}
	]);
