angular.module('housetasks')
	.factory('Family', [
		'Parse',
		function(Parse) {
			var Family = Parse.Object.extend('Family');
			Parse.defineAttributes(Family, [
				'name',
				'createdAt',
				'updatedAt',
				'createdBy'
			]);

			return Family;
		}
	]);
