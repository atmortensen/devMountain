// SERVICES
triviaApp.service('services', ['$http', '$q', function($http, $q){
	
	// GET QUESTIONS
	this.getQuestions = function(difficulty, animal, pages){
		var deferred = $q.defer();
		if(difficulty){var url = 'https://practiceapi.devmountain.com/api/trivia/questions/difficulty/' + difficulty;} 
		else{var url = 'https://practiceapi.devmountain.com/api/trivia/questions/';}
		$http({
			method: 'GET',
			url: url,
			params: {
				animal: animal || null,
				page: pages || null
			}
		}).then(function(response){
			var questions = response.data;
			for(var i=0; i<questions.length; i++){
				if(questions[i].difficulty===3){
					questions[i].difficultyLabel='Hard'
				} else if(questions[i].difficulty===2){
					questions[i].difficultyLabel='Medium'
				} else if(questions[i].difficulty===1){
					questions[i].difficultyLabel='Easy'
				} 
			}
			deferred.resolve(questions)
		});
		return deferred.promise;
	};

	// CHECK QUESTION
	this.checkAnswer = function(selected, answer){
		if(selected===answer){
			return true;
		} else {
			return false;
		}
	};

	// DIFFICULTY SELECTOR
	this.difficultySelector = function(difficulty){
		return difficulty;
	}

}]);