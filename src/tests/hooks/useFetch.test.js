import {renderHook, act} from '@testing-library/react-hooks';
import useFetch from '../../hooks/useFetch';

describe('Tests in useFetch custom hook', () => {
  test('Should get default data', () => {
    const {result} = renderHook(() => useFetch('https://reqres.in/api/users?page=2'));
    const {data, loading, error} = result.current;
    expect(data).toBe(null);
    expect(loading).toBe(true);
    expect(error).toBe(null);
  });

  test('Should get remote data', async() => {
    const {result, waitForNextUpdate} = renderHook(() => useFetch('https://reqres.in/api/users?page=2'));
    await waitForNextUpdate();
    const {data, loading, error} = result.current;
    expect(data).not.toBe(null);
    expect(loading).toBe(false);
    expect(error).toBe(null);
  });

  test('Should managa an error', async() => {
    const {result, waitForNextUpdate} = renderHook(() => useFetch('https://reqres.in/apix/users?page=2'));
    await waitForNextUpdate();
    const {data, loading, error} = result.current;
    expect(data).toBe(null);
    expect(loading).toBe(false);
    expect(error).toBe('Could not get data');
  });
});
