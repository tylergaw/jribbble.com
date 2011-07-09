$(document).ready(function () {		
		
	// API Ref: http://api.dribbble/shots/:id
	$.jribbble.getShotById(196071, function (shot) {
		var html = [];
		
		$('#shotById a:first').attr('href', shot.url);
		$('#shotById img').attr('src', shot.image_url);
		$('#shotById h3').text(shot.title);
		$('#shotById h4').html('by <a href="' + shot.player.url + '">' + 
			shot.player.name + '</a>');
		
		html.push('<li><b>Views:</b> ' + shot.views_count + '</li>');
		html.push('<li><b>Likes:</b> ' + shot.likes_count + '</li>');
		html.push('<li><b>Comments:</b> ' + shot.comments_count + '</li>');
		html.push('<li><b>Rebounds:</b> ' + shot.rebounds_count + '</li>');
		
		$('#shotById ul').html(html.join(''));
	});
	
	// API Ref: http://api.dribbble/shots/:id/comments
	$.jribbble.getCommentsOfShot(51986, function (response) {
		var html = [];
		$.each(response.comments, function (i, comment) {
			html.push('<li>');
			html.push('<a href="' + comment.player.url + '">');
			html.push('<img src="' + comment.player.avatar_url + '" alt=""></a>');
			html.push('<h5>' + comment.player.name + '</h5>');
			html.push('<p>' + comment.body + '</p>');
			html.push('</li>');
		});
		$('#shotCommentsList').html(html.join(''));
	}, {page: 1, per_page: 5});
	
	// Function used only for comments demo full sized shot
	$.jribbble.getShotById(51986, function (shot) {
		$('#shotComments a:first').attr('href', shot.url);
		$('#shotComments a:first img').attr('src', shot.image_url);
		$('#shotComments h3').text(shot.title);
		$('#shotComments h4').html('by <a href="' + shot.player.url + '">' + 
			shot.player.name + '</a>');
	});
	
	// API Ref: http://api.dribbble/shots/:id/rebounds
	$.jribbble.getReboundsOfShot(10745, function (rebounds) {
		var html = [];
		$.each(rebounds.shots, function (i, shot) {
			html.push('<li><h3>' + shot.title + '</h3>');
			html.push('<h4>by ' + shot.player.name + '</h4><a href="' + shot.url + '">');
			html.push('<img src="' + shot.image_teaser_url + '" ');
			html.push('alt="' + shot.title + '"></a></li>');
		});
			
		$('#reboundsOfShot').html(html.join(''));
	}, {page: 1, per_page: 10});
	
	// API Ref: http://api.dribbble/shots/:list
	$.jribbble.getShotsByList('popular', function (listDetails) {
		var html = [];
		$.each(listDetails.shots, function (i, shot) {
			html.push('<li><h3>' + shot.title + '</h3>');
			html.push('<h4>by ' + shot.player.name + '</h4><a href="' + shot.url + '">');
			html.push('<img src="' + shot.image_teaser_url + '" ');
			html.push('alt="' + shot.title + '"></a></li>');
		});
			
		$('#shotsByList').html(html.join(''));
	}, {page: 2, per_page: 10});
	
	// API Ref: http://api.dribbble/players/:id/shots
	$.jribbble.getShotsByPlayerId('tylergaw', function (playerShots) {
		var html = [];
		$.each(playerShots.shots, function (i, shot) {
			html.push('<li><h3>' + shot.title + '</h3>');
			html.push('<h4>by ' + shot.player.name + '</h4><a href="' + shot.url + '">');
			html.push('<img src="' + shot.image_teaser_url + '" ');
			html.push('alt="' + shot.title + '"></a></li>');
		});
			
		$('#shotsByPlayerId').html(html.join(''));
	}, {page: 1, per_page: 10});
	
	// API Ref: http://api.dribbble/players/:id/shots/following
	$.jribbble.getShotsThatPlayerFollows('tylergaw', function (followedShots) {
		var html = [];
		$.each(followedShots.shots, function (i, shot) {
			html.push('<li><h3>' + shot.title + '</h3>');
			html.push('<h4>by ' + shot.player.name + '</h4><a href="' + shot.url + '">');
			html.push('<img src="' + shot.image_teaser_url + '" ');
			html.push('alt="' + shot.title + '"></a></li>');
		});
			
		$('#shotsPlayerFollows').html(html.join(''));
	}, {page: 3, per_page: 10});
	
	// API Ref: http://api.dribbble/players/:id
	$.jribbble.getPlayerById('tylergaw', function (player) {
		
		var html = [];
		html.push('<a href="' + player.url + '"><img src="' + player.avatar_url + '" alt=""></a>');
		html.push('<div><h3>' + player.name + ' / ' + player.location + '</h3>');
		html.push('<h4><a href="' + player.url + '">' + player.url + '</a></h4>');
		html.push('<ul><li><b>Shots: </b>' + player.shots_count + '</li>');
		html.push('<li><b>Following: </b>' + player.following_count + '</li>');
		html.push('<li><b>Followers: </b>' + player.followers_count + '</li>');
		html.push('<li><b>Draftees: </b>' + player.draftees_count + '</li></ul></div>');
		
		$('#playerProfile').html(html.join(''));
	});
	
	// API Ref: http://api.dribbble/players/:id/followers
	$.jribbble.getPlayerFollowers('robertjpetro', function (followers) {
		var html = [];
		$.each(followers.players, function (i, player) {
			html.push('<li><h3>' + player.name + '</h3>');
			html.push('<a href="' + player.url + '">');
			html.push('<img src="' + player.avatar_url + '" ');
			html.push('alt=""></a></li>');
		});
		
		$('#playerFollowers').html(html.join(''));
	}, {per_page: 12});
	
	// API Ref: http://api.dribbble/players/:id/following
	$.jribbble.getPlayerFollowing('tylergaw', function (following) {
		var html = [];
		$.each(following.players, function (i, player) {
			html.push('<li><h3>' + player.name + '</h3>');
			html.push('<a href="' + player.url + '">');
			html.push('<img src="' + player.avatar_url + '" ');
			html.push('alt=""></a></li>');
		});
		$('#playerFollowing').html(html.join(''));
	}, {per_page: 12});
	
	// API Ref: http://api.dribbble/players/:id/draftees
	$.jribbble.getPlayerDraftees('cameronmoll', function (draftees) {
		var html = [];
		$.each(draftees.players, function (i, player) {
			html.push('<li><h3>' + player.name + '</h3>');
			html.push('<a href="' + player.url + '">');
			html.push('<img src="' + player.avatar_url + '" ');
			html.push('alt=""></a></li>');
		});
		$('#playerDraftees').html(html.join(''));
	}, {per_page: 12});
	
	
	// This isn't for the Jribbble demos.
	// This is a workaround for the Mobile Safari scale orientation bug.
	// Code from Adactio: http://adactio.com/journal/4470/
	if (navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i)) {
		var viewportmeta = document.querySelector('meta[name="viewport"]');
		
		if (viewportmeta) {
			viewportmeta.content = 'width=device-width, minimum-scale=1.0, maximum-scale=1.0';
			
			document.addEventListener('gesturestart', function () {
				viewportmeta.content = 'width=device-width, minimum-scale=0.25, maximum-scale=1.6';
			}, false);			
		}
	}
});