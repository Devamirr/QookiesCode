angular.module('qookiescode')
	.factory('User', [
		'Parse',
		function(Parse) {
			var User = Parse.Object.extend('User');
			Parse.defineAttributes(User, [
				'username',
				'email',
				'password',
				'createdAt',
				'updatedAt'
			]);

			return User;
		}
	]);
