/*
var makeBlinkyDancer = function(top, left, timeBetweenSteps) {
  var blinkyDancer = makeDancer(top, left, timeBetweenSteps);

  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function

  var oldStep = blinkyDancer.step;

  blinkyDancer.step = function() {
    // call the old version of step at the beginning of any call to this new version of step
    oldStep();
    // toggle() is a jQuery method to show/hide the <span> tag.
    // See http://api.jquery.com/category/effects/ for this and
    // other effects you can use on a jQuery-wrapped html tag.
    blinkyDancer.$node.toggle();
  };

  return blinkyDancer;
};
*/
// var makeBlinkyDancer = function (top, left, timeBetweenSteps) {
//   return new BlinkyDancer(top, left, timeBetweenSteps);
// };
// make blinky function

var makeBouncyBlinkyDancer = function(top, left, timeBetweenSteps) {
  // call dancer
  makeBlinkyDancer.call(this, top, left, timeBetweenSteps);
  // this.$node = $('<span class= "bouncyBlinkyDancer"></span>');
  this.$node.addClass('bouncyBlinkyDancer');

  var test = this;

  this.$node.mouseover(
    function() {
      console.log('mouse over');
      test.$node.css({'border-color': 'purple'});
    }
  );

  // $( '.dancer').mouseover(function() {
  //   console.log('mouse over');
  // });


};
//var BlinkyDancer = function(){
//  return new BlinkyDancer()
// }

makeBouncyBlinkyDancer.prototype = Object.create(makeBlinkyDancer.prototype);
makeBouncyBlinkyDancer.prototype.constructor = makeBouncyBlinkyDancer;
makeBouncyBlinkyDancer.prototype.step = function () {
  //this is bound to blinkydancer instance object //old step
  //invokeing step method from dancer
  makeDancer.prototype.step.call(this);
  //but when calling the blinkydancer instance, it finds step method in bd prototype-->which leads it to toggle
  //modified inherited step function call
  // console.log(this.$node);

  //   this.$node.animate({
  //   //   // opacity: 0.25,
  //   //   // left: "+=50",
  //   //   height: "toggle"
  //   // }, 5000
  //   //   // Animation complete.
  //   // );

  //   // // this.$node.toggle();

  // };

  this.$node.toggle(function() {
    $(this).animate({top: '-=200'}, 50);
  });
  this.$node.toggle(function() {
    $(this).animate({top: '+=200'}, 50);
  });
  // this.$node;

};


// object.create
// constructor
// var blinkyInstance;
// console.log();

//blinkyDancerInstance.step = function

/*


$(document).ready(function(){
  $("#topbar-show").toggle(function(){
    $(this).animate({height:40},200);
  },function(){
    $(this).animate({height:10},200);
  });
});

*/