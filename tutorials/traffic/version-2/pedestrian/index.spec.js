import { local as localPedestrian, foreigner as foreignerPedestrian } from './';

describe.skip('local pedestrian', () => {
  it('should return the directions to look before crossing the street', () => {
    expect(localPedestrian()).toEqual(['right', 'left']);
  });
});

describe.skip('foreigner pedestrian', () => {
  it('should return the directions to look before crossing the street', () => {
    expect(foreignerPedestrian()).toEqual(['left', 'right']);
  });
});
