(function() {
  var gears = $('.grinds-my-gears');

  var ohGeezStartDemoButBeCareful = function(e) {
    e.preventDefault();

    var btn = $(e.currentTarget);
    btn.addClass('hidden');
    gears.removeClass('hidden');
  };

  $('.do-not-press-btn').on('click', ohGeezStartDemoButBeCareful);
}());
