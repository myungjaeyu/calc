import createCalcTemplate from './internal/createCalcTemplate'

class CalcRenderer {

    constructor() {

        this.calcElement = createCalcTemplate()
        this.OnCell = null

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

    isCell(element) {

        return (element.tagName === 'TD' && element.getAttribute('colspan') !== '3')

    }

    handleClick(event) {

        const { target } = event

        if (this.isCell(target)) this.OnCell(target.innerText)

    }

    setScreen(text) {

        this.calcElement.querySelector('td').innerText = text

    }

}

export default CalcRenderer