/* eslint-disable @typescript-eslint/no-namespace */
/* eslint-disable import/no-cycle */
/* eslint-disable import/prefer-default-export */
import * as types from './types';

export namespace Types {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  export import mod = types;
}

export { default as SomeClass } from './SomeClass';
