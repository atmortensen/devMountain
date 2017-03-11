// MODULE
var triviaApp = angular.module('triviaApp', []);


// CONTROLLERS
triviaApp.controller('mainController', ['$scope', 'services', function($scope, services){

	$scope.page = '0';
	
	// GET QUESTIONS
	$scope.getQuestions = function(difficulty, animal, pages){
		$scope.choosen = '';
		$scope.parentIndex = '';
		services.getQuestions(difficulty, animal, pages).then(function(response){
			$scope.questions = response;
		});
	}
	$scope.getQuestions('','','');

	// CHECK ANSWER
	$scope.checkAnswer = function(selected, answer, parentIndex){
		$scope.choosen = selected;
		$scope.parentIndex = parentIndex;
		$scope.isCorrect = services.checkAnswer(selected, answer);
	}
	

}]);
