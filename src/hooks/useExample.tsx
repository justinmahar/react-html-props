import * as React from 'react';

/**
 * See documentation: [useExample](https://justinmahar.github.io/react-kindling/useExample)
 *
 *
 */
export const useExample = (defaultValue: string): ExampleHook => {
  const [value, setValue] = React.useState<string>(defaultValue);
  return [value, setValue];
};

export type ExampleHook = [string, (value: string) => void];
