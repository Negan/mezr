TestSuite.modules.push(function () {

  QUnit.module('overflow');

  var inst = this;
  var element = this.element;
  var container = this.fixture;

  QUnit.test('Should return data on how how much element overflows container from each side.', function (assert) {

    assert.expect(4);

    inst.setStyles(element, {
      position: 'absolute',
      width: '3px',
      height: '3px',
      left: '-3px',
      top: '-3px',
      padding: '1px'
    });

    inst.setStyles(container, {
      position: 'absolute',
      width: '100px',
      height: '100px',
      left: '0px',
      top: '0px'
    });

    var elementRect = mezr.rect(element);
    var containerRect = mezr.rect(container);
    var expected = {left: 3, right: -98, top: 3, bottom: -98};
    var expectedWithoutPadding = {left: 2, right: -99, top: 2, bottom: -99};

    assert.deepEqual(mezr.overflow(element, container), expected, 'Two elements.');
    assert.deepEqual(mezr.overflow(elementRect, containerRect), expected, 'Two objects.');
    assert.deepEqual(mezr.overflow(element, containerRect), expected, 'Element and object.');
    assert.deepEqual(mezr.overflow([element, 'content'], containerRect), expectedWithoutPadding, 'Array and object.');

  });

});