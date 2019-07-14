import test from 'ava'

import { isNumber } from '../src/util/index'

test('isNumber(1)', t => {

    t.is(isNumber(1), true)

})

test('isNumber(11)', t => {

    t.is(isNumber(11), true)

})

test('isNumber(11.1)', t => {

    t.is(isNumber(11.1), true)

})

test(`isNumber('1')`, t => {

    t.is(isNumber('1'), true)

})

test(`isNumber('11')`, t => {

    t.is(isNumber('11'), true)

})

test(`isNumber('011')`, t => {

    t.is(isNumber('011'), true)

})

test(`isNumber('11.1')`, t => {

    t.is(isNumber('11.1'), true)

})

test(`isNumber('011.1')`, t => {

    t.is(isNumber('011.1'), true)

})

test(`isNumber('+')`, t => {

    t.is(isNumber('+'), false)

})

test(`isNumber('-')`, t => {

    t.is(isNumber('-'), false)

})

test(`isNumber('X')`, t => {

    t.is(isNumber('X'), false)

})

test(`isNumber('.')`, t => {

    t.is(isNumber('.'), false)

})

test(`isNumber('/')`, t => {

    t.is(isNumber('/'), false)

})

test(`isNumber('=')`, t => {

    t.is(isNumber('='), false)

})