$(document).ready(function(){
	var color = 'white';

	$('#red').click(function(){
		color = 'red';
	});
	$('#green').click(function(){
		color = 'green';
	});
	$('#blue').click(function(){
		color = 'blue';
	});
	$('#yellow').click(function(){
		color = 'yellow';
	});
	$('#white').click(function(){
		color = 'white';
	});
	$('#black').click(function(){
		color = 'black';
	});

	$('.box').on('mousemove', function(e){
		if(e.buttons===1){
			$(this).css('background', color);
		}
	});

	$('#reset').click(function(){
		$('.box').css('background', 'black');
	});
});