import { getDuration } from '../helpers';

describe('getDuration', () => {
  it('should handle all zeros', () => {
    const duration = getDuration(0, 0);
    expect(duration).toEqual('0 milliseconds');
  });

  it('should return duration in milliseconds when less than 1000', () => {
    const duration = getDuration(500, 1000);
    expect(duration).toEqual('500 milliseconds');
  });

  it('should return duration in seconds when greater than 1000', () => {
    const duration = getDuration(2000, 5000);
    expect(duration).toEqual('3 seconds');
  });
});
