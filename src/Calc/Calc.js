import CalcService from './CalcService'
import CalcRenderer from './CalcRenderer'

class Calc {

    constructor() {
        
        this.service = new CalcService()
        this.renderer = new CalcRenderer()

    }

}

export default Calc