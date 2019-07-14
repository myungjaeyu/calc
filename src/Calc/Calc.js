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

        this.renderer.init()
        this.renderer.setOnCell(this.OnCell.bind(this))

    }

    getElement() {
        return this.rootElement
    }

    OnCell(text) {

        console.log(text)

    }

}

export default Calc