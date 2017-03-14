angular.module('housetasks')
	.filter('filterTask', ['$sce', function($s) {

		return function(values, taskCompleted) {

			// filter
			return values.filter(function(value) {
				if (taskCompleted === 2) {
					// initially don't filter
					return !value.completed;
				} else if (taskCompleted === 1) {
					return value.completed;
				} else {
					return true;
				}

				//return $sce.trustAsHtml(output); voor als html verandert
			});
		};
	}]);
