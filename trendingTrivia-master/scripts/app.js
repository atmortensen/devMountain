// MODULE
var triviaApp = angular.module('triviaApp', []);


// CONTROLLER
triviaApp.controller('mainController', ['$scope', 'services', function($scope, services){

	$scope.animalSearch = '';
	$scope.page = 0;
	$scope.difficulty = '';

	// CHECK PAGE
	$scope.checkPages = function(){
		services.checkPage($scope.difficulty, $scope.animalSearch, $scope.page+1).then(function(response){
			$scope.nextShow = response;
		});
		services.checkPage($scope.difficulty, $scope.animalSearch, $scope.page-1).then(function(response){
			$scope.previousShow = response;
		});
	};

	// GET QUESTIONS
	$scope.getQuestions = function(difficulty, animal, page){
		$scope.choosen = '';
		$scope.parentIndex = '';
		services.getQuestions(difficulty, animal, page).then(function(response){
			$scope.questions = response;
		});
		$scope.checkPages();
	};
	$scope.getQuestions();

	// CHECK ANSWER
	$scope.checkAnswer = function(selected, answer, parentIndex){
		$scope.choosen = selected;
		$scope.parentIndex = parentIndex;
		$scope.isCorrect = services.checkAnswer(selected, answer);
	};

	// CHECK DIFFICULTY
	$scope.checkDifficulty = function(difficulty){
		$scope.page = 0;
		$scope.difficulty = difficulty;
		$scope.searchShow=false;
		$scope.animalSearch = '';
		$scope.getQuestions($scope.difficulty, $scope.animalSearch, $scope.page); 
	};

	// NEW QUESTION 
	$scope.newQuestion = function(newQ){
		services.newQuestion(newQ).then(function(){
			$scope.modalShow=false; 
			$scope.newQ=null;
			$scope.getQuestions();
		});
	}

	// NEW QUESTION 
	$scope.deleteQuestion = function(question){
		services.deleteQuestion(question).then(function(){
			$scope.modalShow=false; 
			$scope.newQ=null;
			$scope.getQuestions();
		});
	};

	// EDIT QUESTION
	$scope.editQuestion = function(question){
		services.editQuestion(question).then(function(){
			$scope.modalShow=false; 
			$scope.newQ=null;
			$scope.getQuestions();
		});
	}

}]);
