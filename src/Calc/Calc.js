import CalcService from './CalcService'
import CalcRenderer from './CalcRenderer'

class Calc {

    constructor(rootElement) {
        
        this.rootElement = rootElement
        this.service = new CalcService()
        this.renderer = new CalcRenderer()

    }

    init() {

        this.getElement()
            .appendChild(this.renderer.getElement())

    }

    getElement() {
        return this.rootElement
    }

}

export default Calc