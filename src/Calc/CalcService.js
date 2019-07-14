class CalcService {

    constructor() {

        this.typingValue = ''
        this.resultValue = ''

        this.operation = ''

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

}

export default CalcService