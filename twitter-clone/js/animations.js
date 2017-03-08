jQuery(document).ready(function() {
  jQuery("time.timeago").timeago();
  $('#char-count').hide();
  $('#tweet-submit').hide();
  $('#tweet-submit').prop('disabled', true);
  $('.tweet .stats').hide();
  $('.tweet .reply').hide();


  $('#tweet-content textarea').on('focus', function(){
  	$(this).css('height', '5em');
  	$('#char-count').show();
  	$('#tweet-submit').show();
  });

  $('#tweet-content .tweet-compose').on('focusout', function(){
  	if(!$(this).val()){
  		$(this).css('height', '');
  		$('#char-count').hide();
  		$('#tweet-submit').hide();
  	}
  	
  });

  $('#tweet-content .tweet-compose').on('keyup', function(){
  	var char = 140 - $(this).val().length;
  	$('#char-count').text(char);
  	$('#char-count').css('color', '');
  	if(char<=10){
  		$('#char-count').css('color', 'red');
  	}
  	if(char>0 && char<140){
  		$('#tweet-submit').prop('disabled', '');
  	} else {
  		$('#tweet-submit').prop('disabled', true);
  	}
  });

  $(document).on('click', '.tweet', function(){
  	$('.tweet .stats').hide();
  	$('.tweet .reply').hide();
  	$(this).find('.stats').show();
  	$(this).find('.reply').show();
  });

  $('#tweet-submit').on('click', function(){
  	var timeStamp = jQuery.timeago(new Date());
  	$('#stream').prepend("<div class='tweet'>" +
  							"<div class='content'>" +
  							"<img class='avatar' src='img/alagoon.jpg' />" +
  							"<strong class='fullname'>Alex Mortensen</strong>" +
  							"<span class='username'>@alexander</span>" +

  							"<p class='tweet-text'>" + $('#tweet-content .tweet-compose').val() + "</p>"+

  							"<div class='tweet-actions'>" +
  								"<ul>" +
  									"<li><span class='icon action-reply'></span> Reply</li>" +
  									"<li><span class='icon action-retweet'></span> Retweet</li>" +
  									"<li><span class='icon action-favorite'></span> Favorite</li>" +
  									"<li><span class='icon action-more'></span> More</li>" +
  								"</ul>" +
  							"</div>" +

  							"<div class='stats'>" +
  								"<div class='retweets'>" +
  									"<p class='num-retweets'>10</p>" +
  									"<p>RETWEETS</p>" +
  								"</div>" +
  								"<div class='favorites'>" +
  									"<p class='num-favorites'>3</p>" +
  									"<p>FAVORITES</p>" +
  								"</div>" +
  								"<div class='users-interact'>" +
  									"<div>" +
  										"<img src='img/alagoon.jpg' />" +
  										"<img src='img/vklimenko.jpg' />" +
  									"</div>" +
  								"</div>" +

  								"<div class='time'>" +
  									timeStamp +
  								"</div>" +
  							"</div>" +
  							"<div class='reply'>" +
  								"<img class='avatar' src='img/alagoon.jpg' />" +
  								"<textarea class='tweet-compose' placeholder='Reply to @alexander'/></textarea>" +
  							"</div>" +
  						"</div>" +
  					"</div><!-- .tweet -->");
  	$('#tweet-content .tweet-compose').val('');
  	$('#tweet-content textarea').css('height', '');
  	$('#char-count').hide();
  	$('#tweet-submit').hide();
  	$('#char-count').text(140);
  	$('.tweet .stats').hide();
  	$('.tweet .reply').hide();
  });
});
