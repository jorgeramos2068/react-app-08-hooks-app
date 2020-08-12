import {renderHook, act} from '@testing-library/react-hooks';
import useCounter from '../../hooks/useCounter';

describe('Tests in useCounter custom hook', ()=> {
  test('Should return default values', () => {
    const {result} = renderHook(() => useCounter());
    expect(result.current.counter).toBe(10);
    expect(typeof result.current.increment).toBe('function');
    expect(typeof result.current.decrement).toBe('function');
    expect(typeof result.current.reset).toBe('function');
  });

  test('Should return default counter', () => {
    const defaultCounter = 100;
    const {result} = renderHook(() => useCounter(defaultCounter));
    expect(result.current.counter).toBe(defaultCounter);
  });

  test('Should increment counter', () => {
    const defaultCounter = 100;
    const {result} = renderHook(() => useCounter(defaultCounter));
    const {increment} = result.current;
    act(() => {
      increment();
    });
    const {counter} = result.current;
    expect(counter).toBe(defaultCounter + 1);
  });

  test('Should decrement counter', () => {
    const defaultCounter = 100;
    const {result} = renderHook(() => useCounter(defaultCounter));
    const {decrement} = result.current;
    act(() => {
      decrement();
    });
    const {counter} = result.current;
    expect(counter).toBe(defaultCounter - 1);;
  });

  test('Should reset counter', () => {
    const defaultCounter = 100;
    const {result} = renderHook(() => useCounter(defaultCounter));
    const {increment, reset} = result.current;
    act(() => {
      increment();
      reset();
    });
    const {counter} = result.current;
    expect(counter).toBe(defaultCounter);
  });
});