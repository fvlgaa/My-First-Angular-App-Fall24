import { PhoneLengthPipe } from './phone-length.pipe';

describe('PhoneLengthPipe', () => {
  it('create an instance', () => {
    const pipe = new PhoneLengthPipe();
    expect(pipe).toBeTruthy();
  });
});
