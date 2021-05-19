import { renderHook } from '@testing-library/react-hooks';
import { useExample } from '../hooks/useExample';

describe('useExample Hook', () => {
  test('should run without crashing', () => {
    const { result } = renderHook(() => useExample('Example text'));
    expect(result.error).toBe(undefined);
  });
});
