import {renderHook, act} from '@testing-library/react-hooks';
import useForm from '../../hooks/useForm';

describe('Tests in useForm custom hook', () => {
  const initialForm = {
    name: 'Batman',
    email: 'batman@test.com'
  };

  test('Should return a default form', () => {
    const {result} = renderHook(() => useForm(initialForm));
    const [values, handleInputChange, reset] = result.current;
    expect(values).toEqual(initialForm);
    expect(typeof handleInputChange).toBe('function');
    expect(typeof reset).toBe('function');
  });

  test('Should change a value with handleInputChange', () => {
    const {result} = renderHook(() => useForm(initialForm));
    const [, handleInputChange,] = result.current;
    const e = {
      target: {
        name: 'name',
        value: 'Batman Begins'
      }
    };
    act(() => {
      handleInputChange(e);
    });
    const [values,,] = result.current;
    expect(values).toEqual({...initialForm, name: e.target.value});
  });

  test('Should reset the form', () => {
    const {result} = renderHook(() => useForm(initialForm));
    const [, handleInputChange,reset] = result.current;
    const e = {
      target: {
        name: 'name',
        value: 'Batman Begins'
      }
    };
    act(() => {
      handleInputChange(e);
      reset();
    });
    const [values,,] = result.current;
    expect(values).toEqual(initialForm);
  });
});
