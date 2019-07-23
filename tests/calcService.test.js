import test from 'ava'

import CalcService from '../src/Calc/CalcService'

const calcService = new CalcService()

test('calcService instanceof CalcService', t => {

    t.is(calcService instanceof CalcService, true)

})

test('CalcService class variables', t => {

    t.is(calcService.typingValue, null)
    t.is(calcService.resultValue, null)
    t.is(calcService.operation, null)
    t.is(calcService.flag, null)

    calcService.init()

    t.is(calcService.typingValue, '')
    t.is(calcService.resultValue, '')
    t.is(calcService.operation, '')
    t.is(calcService.flag, false)

})

test('CalcService addTypingValue', t => {

    calcService.addTypingValue('2')
    t.is(calcService.getTypingValue(), '2')

    calcService.addTypingValue('2')
    t.is(calcService.getTypingValue(), '22')

    calcService.addTypingValue('2')
    t.is(calcService.getTypingValue(), '222')

})

test('CalcService getTypingValueLength', t => {

    t.is(calcService.getTypingValueLength(), 3)

})

test('CalcService setTypingValue', t => {

    calcService.setTypingValue('2')
    t.is(calcService.getTypingValue(), '2')

})

test('CalcService setResultValue', t => {

    calcService.setResultValue(5)

    t.is(calcService.getResultValue(), 5)

})

test('CalcService setOperation', t => {

    calcService.setOperation('+')
    t.is(calcService.getOperation(), '+')


    calcService.setOperation('-')
    t.is(calcService.getOperation(), '-')


    calcService.setOperation('X')
    t.is(calcService.getOperation(), '*')


    calcService.setOperation('/')
    t.is(calcService.getOperation(), '/')


    calcService.setOperation('=')
    t.is(calcService.getOperation(), '')


    calcService.setOperation('.')
    t.is(calcService.getOperation(), '.')

})

test('CalcService isTypingValueSymbol', t => {

    calcService.setTypingValue('100,000.')

    t.is(calcService.isTypingValueSymbol(), true)

    calcService.setTypingValue('1,000,000.12')
    t.is(calcService.isTypingValueSymbol(), true)

    calcService.setTypingValue('1000000.12')
    t.is(calcService.isTypingValueSymbol(), true)

    calcService.setTypingValue('0.12')
    t.is(calcService.isTypingValueSymbol(), true)

    calcService.setTypingValue('.12')
    t.is(calcService.isTypingValueSymbol(), true)

})