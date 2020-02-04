import { replace } from '../src'
import eq from './shared/eq'

describe('replace', function() {

  it('replaces substrings of the input string', function() {
    eq(replace('1', 'one', '1 two three'), 'one two three');
  });

  it('replaces regex matches of the input string', function() {
    eq(replace(/\d+/g, 'num', '1 2 three'), 'num num three');
  });

});
