import { mockValue } from './mock';

describe('make sure mock api is working so can use to test on App', () => {
  test('the data is returning successfully', () => {
    const useFetch = jest.fn();
    useFetch.mockReturnValue(mockValue);
    const data =  useFetch();
    expect(data[0].id).toEqual(1);
    expect(data[0].name).toEqual('Mr Business');
  });
});