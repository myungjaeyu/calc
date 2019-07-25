import test from 'ava'

import { toComma } from '../src/util/index'

test('toComma(1000)', t => {

    t.is(toComma(1000), '1,000')

})

test(`toComma('1000')`, t => {

    t.is(toComma('1000'), '1,000')

})

test('toComma(100000)', t => {

    t.is(toComma(100000), '100,000')

})

test(`toComma(1000000000)`, t => {

    t.is(toComma(1000000000), '1,000,000,000')

})