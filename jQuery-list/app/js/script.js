$(document).ready(function(){
	var listo = [];
	if(localStorage.listo){
		listo = JSON.parse(localStorage.listo);
		listo.forEach(function(item){
			if(item.id==='new'){var selector = '#newList';}
			else if(item.id==='inProgress'){var selector = '#currentList';}
			else if(item.id==='archived'){var selector = '#archivedList';}
			else {console.log("Problem with id.");}
			$(selector).append(
				'<a href="#finish" id="' + item.id + '">' +
				'<li class="list-group-item">' +
				'<h3>' + item.task + '</h3>'+
				'<span class="arrow pull-right">' +
				'<i class="glyphicon glyphicon-arrow-right">' +
				'</span>' +
				'</li>' +
				'</a>'
				);
		});
	}

	
	var Task = function(task){
		this.task = task;
		this.id = 'new';
	}

	var addTask = function(task){
		if(task){
			task = new Task(task);
			listo.push(task);
			localStorage.listo = JSON.stringify(listo);

			$('#newItemInput').val('');

			$('#newList').append(
				'<a href="#finish" id="' + task.id + '">' +
				'<li class="list-group-item">' +
				'<h3>' + task.task + '</h3>'+
				'<span class="arrow pull-right">' +
				'<i class="glyphicon glyphicon-arrow-right">' +
				'</span>' +
				'</li>' +
				'</a>'
				);
		}
		$('#newTaskForm').slideToggle('fast', 'linear');
	};

	var advanceTask = function(task) {
	  var modified = task.innerText.trim()
	  for (var i = 0; i < listo.length; i++) {
	    if (listo[i].task.toUpperCase() === modified) {
	      if (listo[i].id === 'new') {
	        listo[i].id = 'inProgress';
	      } else if (listo[i].id === 'inProgress') {
	        listo[i].id = 'archived';
	      } else {
	        listo.splice(i, 1);
	      }
	      localStorage.listo = JSON.stringify(listo);
	      break;
	    }
	  }
	  task.remove();
	};

	$('#newTaskForm').hide();

	$('#saveNewItem').click(function(e){
		e.preventDefault();
		var task = $('#newItemInput').val().trim();
		addTask(task);
	});

	$('#add-todo').click(function(e){
		$('#newTaskForm').slideToggle('fast', 'linear');
	});

	$('#cancel').click(function(e){
		e.preventDefault();
		$('#newTaskForm').slideToggle('fast', 'linear');
	});

	$(document).on('click', '#new', function(e) {
	  e.preventDefault();
	  var task = this;		
	  advanceTask(task);
	  this.id = 'inProgress';
	  $('#currentList').append(this.outerHTML);
	});

	$(document).on('click', '#inProgress', function (e) {
	  e.preventDefault();
	  var task = this;
	  task.id = "archived";
	  var changeIcon = task.outerHTML.replace('glyphicon-arrow-right', 'glyphicon-remove');
	  advanceTask(task);
	  $('#archivedList').append(changeIcon);
	});

	$(document).on('click', '#archived', function (e) {
	  e.preventDefault();
	  var task = this;
	  advanceTask(task);
	});
});