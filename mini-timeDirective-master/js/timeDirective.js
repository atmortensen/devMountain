// DIRECTIVE
myApp.directive('showTime', function(){
	return {
		restrict: 'E',
		template: '<div> The current time is {{time}}',
		replace: true,
		link: function(scope, element, attributes){
			scope.time = new Date().toString();
		}
	}
});