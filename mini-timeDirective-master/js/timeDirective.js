// DIRECTIVE
myApp.directive('showTime', function(){
	return {
		restrict: 'E',
		template: '<div> The current time is {{time}}',
		replace: true,
		scope: {
			time: '='
		}
		// link: function(scope, element, attributes){
		// 	scope.time = new Date().toString();
		// }
	}
});