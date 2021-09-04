// Creates and returns a new dancer object that can step
/*
var makeDancer = function(top, left, timeBetweenSteps) {

  var dancer = {};

  // use jQuery to create an HTML <span> tag
  dancer.$node = $('<span class="dancer"></span>');

  dancer.step = function() {
    // the basic dancer doesn't do anything interesting at all on each step,
    // it just schedules the next step
    setTimeout(dancer.step, timeBetweenSteps);
  };
  dancer.step();

  dancer.setPosition = function(top, left) {
    // Use css top and left properties to position our <span> tag
    // where it belongs on the page. See http://api.jquery.com/css/
    //
    var styleSettings = {
      top: top,
      left: left
    };
    dancer.$node.css(styleSettings);
  };

  // now that we have defined the dancer object, we can start setting up important parts of it by calling the methods we wrote
  // this one sets the position to some random default point within the body
  dancer.setPosition(top, left);

  return dancer;
};
*/

// var makeDancer = function(top, left, timeBetweenSteps) {
//   return new Dancer(top, left, timeBetweenSteps);
// };

var makeDancer = function (top, left, timeBetweenSteps) {
  this.$node = $('<span class="dancer"></span>');
  window.dancers.push(this.$node);
  console.log(window.dancers);
  // var $button = $('<button id="lineUpBtn">Line Up</button>');
  var button = document.getElementById('lineUpBtn');
  // $button.click(this.lineUp);

  button.addEventListener('click', this.lineUp);

  this.timeBetweenSteps = timeBetweenSteps;
  this.step();
  this.setPosition(top, left);


};

makeDancer.prototype.step = function() {
  setTimeout(this.step.bind(this), this.timeBetweenSteps);
};


makeDancer.prototype.setPosition = function(top, left) {
  var styleSettings = {
    top: top,
    left: left
  };

  this.$node.css(styleSettings);
};


makeDancer.prototype.lineUp = function() {
  for (var i = 0; i < window.dancers.length; i ++) {
    window.dancers[i].animate({top: (50 + (i * 30)), left: 50});
    if (i % 2 === 0) {
      window.dancers[i].animate({opacity: 0.25, left: 50});
    } else {
      window.dancers[i].animate({opacity: 1000, left: 500});
    }
  }

};

//sortNodeFunction

//for each node in window.dancers

//if it's odd-->display '

//if it's even -->animate









