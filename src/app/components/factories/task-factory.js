angular.module('housetasks')
	.factory('Task', [
		'Parse',
		function(Parse) {
			var Task = Parse.Object.extend('Task');
			Parse.defineAttributes(Task, [
				'task',
				'family',
				'createdAt',
				'updatedAt',
				'completedBy',
				'completed',
				'createdBy',
				'points',
				'dateCompleted',
				'dateExpiration',
				'dateExpired'
			]);

			return Task;
		}
	]);
