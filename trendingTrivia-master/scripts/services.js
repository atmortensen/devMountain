// SERVICE
triviaApp.service('services', ['$http', '$q', function($http, $q){
	var self = this;

	// GET QUESTIONS
	this.getQuestions = function(difficulty, animal, page){
		var deferred = $q.defer();
		if(difficulty){var url = 'https://practiceapi.devmountain.com/api/trivia/questions/difficulty/' + difficulty;} 
		else{var url = 'https://practiceapi.devmountain.com/api/trivia/questions/';}
		$http({
			method: 'GET',
			url: url,
			params: {
				animal: animal || null,
				page: page || null
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
			deferred.resolve(questions);
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
	};

	// CHECK PAGE 
	this.checkPage = function(difficulty, animal, page){
		var deferred = $q.defer();
		if(page<0){
			deferred.resolve(false);
			return deferred.promise;
		}
		self.getQuestions(difficulty, animal, page).then(function(response){
			if(!response[0]){var isTrue = false;}
			else{var isTrue = true;}
			deferred.resolve(isTrue);
		});
		return deferred.promise;
	};

	// NEW QUESTION 
	this.newQuestion = function(newQ){
		return $http({
			method: 'POST',
			url: 'https://practiceapi.devmountain.com/api/trivia/questions',
			data: newQ
		});
	};

	// DELETE QUESTION 
	this.deleteQuestion = function(question){
		if(question){
			return $http({
				method: 'DELETE',
				url: 'https://practiceapi.devmountain.com/api/trivia/questions/' + question,
			});
		}
	};

	// EDIT QUESTION
	this.editQuestion = function(question){
		return $http({
			method: 'PUT',
			url: 'https://practiceapi.devmountain.com/api/trivia/questions/'+question._id,
			data: question
		});
	};


}]);