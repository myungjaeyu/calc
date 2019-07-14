import createCalcTemplate from './internal/createCalcTemplate'

class CalcRenderer {

    constructor() {

        this.calcElement = createCalcTemplate()

    }

    getElement() {

        return this.calcElement

    }

}

export default CalcRenderer