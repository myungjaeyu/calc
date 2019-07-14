class CalcService {

    constructor() {

        this.typingValue = ''

    }


    addTypingValue(text) {

        this.typingValue += text

    }

    getTypingValue() {

        return this.typingValue

    }

}

export default CalcService