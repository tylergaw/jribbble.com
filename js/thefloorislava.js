(function() {
  var ohGeezStartDemoButBeCareful = function(e) {
    e.preventDefault();

    alert('shit');
  };

  $('.do-not-press-btn').on('click', ohGeezStartDemoButBeCareful);
}());
