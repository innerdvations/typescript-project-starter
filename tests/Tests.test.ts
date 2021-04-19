/* eslint-disable max-len */
/* eslint-disable no-constant-condition */
import { expect } from 'chai';
import {
  SomeClass,
} from '../src';

// NOTE: These tests loop through the list of available type methods to ensure consistency
// However, that means failures don't report properly. If a test fails, it can be checked in reported loop with:
// console.log('tg[typeToCheck as keyof TelegramChat]', typeToCheck, tg[typeToCheck as keyof TelegramChat]);
describe('Tests', () => {
  it('run', () => {
    const sc = new SomeClass();
    expect(sc).to.exist;
  });
});
