import pedestrian from './pedestrian';
import street from './street';

describe.skip('street with a pedestrian', () => {
  it('should be accident free', () => {
    expect(street(pedestrian)).not.toThrow();
  });
});
