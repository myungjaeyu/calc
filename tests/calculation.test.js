import test from 'ava'

import { add, subtrac, multiple, div, calculation } from '../src/util/index'

test(`calculation(10, '+', 5)`, t => {

    t.is(calculation(10, '+', 5), 15)

})

test(`calculation('10', '+', '5')`, t => {

    t.is(calculation('10', '+', '5'), 15)

})

test(`calculation(10, '*', 5)`, t => {

    t.is(calculation(10, '*', 5), 50)

})

test(`calculation(10, '/', 5)`, t => {

    t.is(calculation(10, '/', 5), 2)

})

test(`calculation(10, '-', 5)`, t => {

    t.is(calculation(10, '-', 5), 5)

})

test(`add(5, 5)`, t => {

    t.is(add(5, 5), 10)

})

test(`subtrac(5, 5)`, t => {

    t.is(subtrac(5, 5), 0)

})

test(`multiple(5, 5)`, t => {

    t.is(multiple(5, 5), 25)

})

test(`div(5, 5)`, t => {

    t.is(div(5, 5), 1)

})