import test from 'ava'
import { JSDOM } from 'jsdom'

const window = new JSDOM().window
const document = window.document

import createCalcTemplate from '../src/Calc/internal/createCalcTemplate'

const element = createCalcTemplate(document)

test('CalcTemplate instanceof HTMLTableElement', t => {

    t.is(element instanceof window.HTMLTableElement , true)

    t.is(element.tagName, 'TABLE')

})

test('CalcTemplate className', t => {

    t.is(element.className , 'calc-template')

})

test('children Element', t => {

    t.is(element.children.length, 1)

    t.is(element.children[0].tagName, 'TBODY')

})

const tbody = element.children[0]

test('tbody children Element', t => {

    t.is(tbody.children.length, 5)

    Array.from(tbody.children).forEach((tr, index) => {

        t.is(tr.tagName, 'TR')

        index === 0 ? t.is(tr.children.length, 2) : t.is(tr.children.length, 4)

    })

})

const tbodyFirstElement = tbody.children[0]

const screenElement = tbodyFirstElement.children[0]
const clearElement = tbodyFirstElement.children[1]

test('screenElement value', t => {

    t.is(screenElement.textContent, '0')

})

test('clearElement value', t => {

    t.is(clearElement.textContent, 'C')

})