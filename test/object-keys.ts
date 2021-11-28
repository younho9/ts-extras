import test from 'ava';
import {expectTypeOf} from 'expect-type';
import {objectKeys} from '../source/index.js';

test('objectKeys()', t => {
	type Item = '1' | 'b' | 'c';
	const items = objectKeys({1: 1, b: 2, c: 3});

	expectTypeOf<Item[]>(items);
	t.deepEqual(items, ['1', 'b', 'c']);
});
