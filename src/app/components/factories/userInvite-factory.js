angular.module('housetasks')
	.factory('UserInvite', [
		'Parse',
		function(Parse) {
			var UserInvite = Parse.Object.extend('userInvite');
			Parse.defineAttributes(UserInvite, [
				'email',
				'family',
				'createdAt',
				'updatedAt',
				'invitedBy'
			]);

			return UserInvite;
		}
	]);
