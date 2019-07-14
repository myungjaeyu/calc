import test from 'ava'

import { calculation } from '../src/util/index'

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