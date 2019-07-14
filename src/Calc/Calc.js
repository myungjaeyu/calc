import CalcService from './CalcService'
import CalcRenderer from './CalcRenderer'

class Calc {

    constructor(rootElement) {
        
        this.rootElement = rootElement
        this.service = new CalcService()
        this.renderer = new CalcRenderer()

    }

    init() {

        console.log(this.rootElement)

    }

}

export default Calc