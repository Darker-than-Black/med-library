import { PATTERN_TYPES } from './patternTypes';

export const REGEX_LIST = new Map<PATTERN_TYPES, RegExp>()
  .set(PATTERN_TYPES.DECIMAL, new RegExp(/^\d*\.?\d{0,2}$/g))
  .set(PATTERN_TYPES.LATIN_AND_NUMBER, new RegExp(/^[-@./#&+\w\s]*$/));
