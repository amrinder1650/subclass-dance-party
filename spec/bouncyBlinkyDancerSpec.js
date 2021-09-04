describe('bouncyBlinkyDancer', function() {

  var bouncyBlinkyDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    bouncyBlinkyDancer = new makeBouncyBlinkyDancer(10, 20, timeBetweenSteps);
  });

  // it('should have a jQuery $node object', function() {
  //   expect(bouncyBlinkyDancer.$node).to.be.an.instanceof(jQuery);
  // });

  // it('should have a step function that makes its node blink', function() {
  //   sinon.spy(bouncyBlinkyDancer.$node, 'toggle');
  //   bouncyBlinkyDancer.step();
  //   expect(bouncyBlinkyDancer.$node.toggle.called).to.be.true;
  // });

  it('should have a step function that makes its node bounce up and down', function() {
    sinon.spy(bouncyBlinkyDancer.$node, 'animate');
    bouncyBlinkyDancer.step();
    expect(bouncyBlinkyDancer.$node.animate.called).to.be.true;
  });

  //if bounce= css animation , class ??
  //test if that class is attached?

  describe('dance', function() {
    it('should call step at least once per second', function() {
      sinon.spy(bouncyBlinkyDancer, 'step');
      expect(bouncyBlinkyDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(bouncyBlinkyDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(bouncyBlinkyDancer.step.callCount).to.be.equal(2);
    });
  });
});
