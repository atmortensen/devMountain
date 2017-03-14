directivePractice.directive('lessonHider', [function(){
	return {
		templateUrl: 'lessonHider.html',
		replace: true,
		restrict: 'E',
		scope: {
			lesson: '=',
			dayAlert: '&'
		},
		link: function(scope, element, attributes){
			scope.getSchedule.then(function(response){
				scope.schedule = response.data;

				scope.schedule.forEach(function(scheduleDay){
					if(scheduleDay.lesson === scope.lesson){
						scope.lessonDay = scheduleDay.weekday;
						element.css('text-decoration', 'line-through');
						return;
					}
				});
			});
		},
		controller: ['$scope', 'lessonService', function($scope, lessonService){
			$scope.getSchedule = lessonService.getSchedule();
		}]
	}
}]);