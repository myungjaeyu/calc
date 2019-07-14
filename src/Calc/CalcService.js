class CalcService {

    constructor() {

        this.typingValue = null
        this.resultValue = null

        this.operation = null

        this.flag = null

    }

    init() {

        this.typingValue = ''
        this.resultValue = ''

        this.operation = ''

        this.flag = false

    }


    addTypingValue(text) {

        this.typingValue += text

    }

    getTypingValue() {

        return this.typingValue

    }

    setTypingValue(text) {

        this.typingValue = text

    }

    getTypingValueLength() {
        return this.typingValue.length
    }

    getResultValue() {

        return this.resultValue

    }

    setResultValue(text) {

        this.resultValue = text

    }

    getOperation() {

        return this.operation

    }

    setOperation(text) {

        const operations = {
            '+': '+',
            '-': '-',
            'X': '*',
            '/': '/',
            '=': '',
            '.': '.'
        }

        this.operation = operations[text]

    }

    getFlag() {

        return this.flag

    }

    setFlag(flag) {

        this.flag = flag

    }

    isTypingValueSymbol() {

        return !!this.getTypingValue().match(/\./g)

    }

}

export default CalcService