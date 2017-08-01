import street from './';

const goodPedestrian = () => ['right', 'left'];
const badPedestrain = () => [];

describe.skip('street', () => {
  it("should guarantee the pedestrians' safety on their good behavior", () => {
    expect(street(goodPedestrian)).not.toThrow();
  });
  it('bad pedestrians are doomed', () => {
    expect(street(badPedestrain)).toThrow(/kill/);
  });
});
