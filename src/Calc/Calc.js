import CalcService from './CalcService'
import CalcRenderer from './CalcRenderer'

import { isNumber, calculation } from '../util/index'

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

        isNumber(text) ?
        (
            this.service.addTypingValue(text),
            this.renderer.setScreen(this.service.getTypingValue())
        )
        :
        (
            !this.service.getResultValue() ? 
                this.service.setResultValue(this.service.getTypingValue()) 
                : 
                this.service.getTypingValue() && 
                    (
                        this.service.setResultValue(
                            calculation(
                                this.service.getResultValue(),
                                this.service.getOperation(),
                                this.service.getTypingValue()
                            )
                        ),
                        this.renderer.setScreen(this.service.getResultValue())
                    ),
            this.service.setTypingValue(''),
            this.service.setOperation(text)
        )

    }

}

export default Calc