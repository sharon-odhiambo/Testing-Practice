const stringLength = require ('./stringLength');

test('counts Hi there am Sharon to equal 18', () => {
    expect(stringLength('Hi there am Sharon')).toBe(18);
  });
