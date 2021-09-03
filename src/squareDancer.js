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
var makeSquareDancer = function(top, left, timeBetweenSteps) {
  // call dancer
  makeDancer.call(this, top, left, timeBetweenSteps);

  console.log(this.setPosition);
};
//var BlinkyDancer = function(){
//  return new BlinkyDancer()
// }

makeSquareDancer.prototype = Object.create(makeDancer.prototype);

makeSquareDancer.prototype.constructor = makeSquareDancer;
makeSquareDancer.prototype.step = function () {
  //this is bound to blinkydancer instance object //old step
  //invokeing step method from dancer
  makeDancer.prototype.step.call(this);
  // this.$node = $('<span class="squareDancer"></span>');
  //but when calling the blinkydancer instance, it finds step method in bd prototype-->which leads it to toggle
  //modified inherited step function cal
  // this.$node.toggle();
  // this.$node.toggle(
  //   this.$node.animate({left: '-=20'}, 50);
  //   this.$node.animate({top: '-=20'}, 100);
  //   this.$node.animate({left: '+=20'}, 150);
  //   this.$node.animate({top: '+=20'}, 200);
  // );
  // this.$node = to
  // this.$node =

  this.$node.animate({top: '-=15'}, 100);
  this.$node.animate({left: '+=20'}, 50);
  this.$node.animate({top: '+=20'}, 100);
  this.$node.animate({left: '-=20'}, 50);


  // this.$node.toggle(function() {
  //   $(this).animate({top: '-=20'}, 50);
  // });
  // this.$node.toggle(function() {
  //   $(this).animate({top: '+=20'}, 100);
  // });
  // this.$node.toggle(function() {
  //   $(this).animate({top: '-=20'}, 150);
  // });
  // this.$node.toggle(function() {
  //   $(this).animate({top: '+=20'}, 200);
  // });






};


// object.create
// constructor
// var blinkyInstance;
// console.log();

//blinkyDancerInstance.step = function

