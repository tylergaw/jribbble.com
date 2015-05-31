(function() {
  var bigBadBtn = $('.do-not-press-btn');
  var container = $('.instructions__item--special');
  var gears = $('.grinds-my-gears');
  var steps = $('.demo-steps');
  var stepDuration = 1500;

  var doJribbbleStuff = function() {
    var seqInt = setInterval(function() {
      var cur = steps.find('li:not(.hidden)');
      var next = cur.next();

      if (cur.is(':last-child')) {
        clearInterval(seqInt);
        bigBadBtn.remove();
        gears.remove();
        $('.shots').removeClass('hidden');
      } else {
        cur.addClass('hidden');
        next.removeClass('hidden');
      }
    }, stepDuration);

    $.jribbble.setToken('f688ac519289f19ce5cebc1383c15ad5c02bd58205cd83c86cbb0ce09170c1b4');
    container.append('<ul class="shots hidden"></ul>');

    $.jribbble.shots('teams').then(function(shots) {
      var html = [];

      html.push('<li class="shots__heading"><h3 class="instructions__detail">Team Shots</h3></li>');

      shots.forEach(function(shot) {
        // See the Dribbble docs for all available shot properties.
        html.push('<li class="shots--shot">');
        html.push('<a href="' + shot.html_url + '">');
        html.push('<img src="' + shot.images.normal + '">');
        html.push('</a></li>');
      });

      $('.shots').html(html.join(''));
    });
  };

  var ohGeezStartDemoButBeCareful = function(e) {
    e.preventDefault();

    var btn = $(e.currentTarget);
    btn.addClass('hidden');
    gears.removeClass('hidden');

    doJribbbleStuff();
  };

  bigBadBtn.on('click', ohGeezStartDemoButBeCareful);
}());
