import createCalcTemplate from './internal/createCalcTemplate'

import { toComma } from '../util/index'

class CalcRenderer {

    constructor() {

        this.calcElement = createCalcTemplate(document)
        this.OnCell = null
        this.OnClear = null
        this.OnEqual = null
        this.OnSymbol = null //

    }

    init() {

        this.calcElement.addEventListener('click' , this.handleClick.bind(this))

    }

    getElement() {

        return this.calcElement

    }

    setOnCell(OnCell) {

        this.OnCell = OnCell

    }

    setOnClear(OnClear) {

        this.OnClear = OnClear

    }

    setOnEqual(OnEqual) {
        
        this.OnEqual = OnEqual

    }

    setOnSymbol(OnSymbol) { //

        this.OnSymbol = OnSymbol

    }

    isCell(element) {

        return (element.tagName === 'TD' && element.getAttribute('colspan') !== '3')

    }

    handleClick(event) {

        const { target } = event

        switch (target.innerText) {
            case 'C': return this.OnClear()
            case '=': return this.OnEqual()
            case '.': return this.OnSymbol() //
            default: break
        }

        if (this.isCell(target)) this.OnCell(target.innerText)

    }

    setScreen(text, isSymbol) {

        const symbol = (isSymbol ? '.' : '')

        this.calcElement.querySelector('td').innerText = toComma(text, 5) + symbol //

    }

}

export default CalcRenderer