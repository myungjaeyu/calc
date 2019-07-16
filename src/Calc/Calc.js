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
        this.renderer.setOnClear(this.OnClear.bind(this))
        this.renderer.setOnEqual(this.OnEqual.bind(this))
        this.renderer.setOnSymbol(this.OnSymbol.bind(this))

        this.service.init()
    }

    getElement() {
        return this.rootElement
    }

    OnCell(text) {

        if (isNumber(text)) {

            if (this.service.getTypingValueLength() < 10) {

                if (this.service.getFlag()) {

                    this.service.setTypingValue('')
                    this.service.setFlag(false)

                }

                this.service.addTypingValue(text)
                this.renderer.setScreen(this.service.getTypingValue())

            }

        } else {

            if (!this.service.getResultValue()) {

                this.service.setResultValue(this.service.getTypingValue())

            } else if (this.service.getTypingValue() && !this.service.getFlag()) {

                const resultValue = this.service.getResultValue()
                const operation = this.service.getOperation()
                const typingValue = this.service.getTypingValue()

                const calc = calculation(resultValue, operation, typingValue)

                this.service.setResultValue(calc)
                this.renderer.setScreen(this.service.getResultValue())

            }

            this.service.setFlag(true),
            this.service.setOperation(text)

        }
/*
        isNumber(text) ?
            this.service.getTypingValueLength() < 10 && 
            (
                this.service.getFlag() && (this.service.setTypingValue(''), this.service.setFlag(false)),
                this.service.addTypingValue(text),
                this.renderer.setScreen(this.service.getTypingValue())
            )
        :
        (
            !this.service.getResultValue() ? 
                this.service.setResultValue(this.service.getTypingValue()) 
                : 
                this.service.getTypingValue() && !this.service.getFlag() && 
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
            this.service.setFlag(true),
            this.service.setOperation(text)
        )
*/

    }

    OnClear() {

        this.service.init()
        this.renderer.setScreen('0')

    }

    OnEqual() {

        if (this.service.getTypingValue() && this.service.getOperation()) {

            !this.service.getResultValue() && this.setResultValue(0)

            this.service.setResultValue(calculation(this.service.getResultValue(), this.service.getOperation(), this.service.getTypingValue()))

            this.renderer.setScreen(this.service.getResultValue())

            this.service.setFlag(true)

        }

    }

    OnSymbol() {

        if (!this.service.isTypingValueSymbol()) {

            this.service.addTypingValue('.')

            this.renderer.setScreen(this.service.getTypingValue(), true)

        }

    }

}

export default Calc