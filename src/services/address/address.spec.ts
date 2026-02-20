import { searchAddresses } from './address';
import { citiesHelpers } from './cities.helpers';
import { test } from '@jest/globals';
import fetchMock from 'jest-fetch-mock';

fetchMock.enableMocks();

describe('searchAddress', () => {
  beforeEach(() => {
    fetchMock.resetMocks();
  });

  test('should return searched addresses', async () => {
    fetchMock.mockResponseOnce(JSON.stringify(citiesHelpers));

    const result = await searchAddresses('9 rue');
    expect(result).toMatchSnapshot();
  });

  test('should return nothing when the search < 3 caracter', async () => {
    const result = await searchAddresses('3 r');
    expect(result).toEqual([]);
  });

  test('should return nothing when the search is not an array', async () => {
    const result = await searchAddresses('Hello');
    expect(result).toEqual([]);
  });

  test('should return nothing when the search is empty', async () => {
    const result = await searchAddresses('');
    expect(result).toEqual([]);
  });
});
