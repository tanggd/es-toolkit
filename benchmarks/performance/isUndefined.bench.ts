import { bench, describe } from 'vitest';
import { isUndefined as isUndefinedToolkit } from 'es-toolkit';
import { isUndefined as isUndefinedLodash } from 'lodash';

describe('isUndefined', () => {
  bench('es-toolkit/isUndefined', () => {
    isUndefinedToolkit(undefined);
    isUndefinedToolkit(null);
    isUndefinedToolkit('');
    isUndefinedToolkit(123);
  });
  bench('lodash/isUndefined', () => {
    isUndefinedLodash(undefined);
    isUndefinedLodash(null);
    isUndefinedLodash('');
    isUndefinedLodash(123);
  });
});
