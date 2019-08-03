var Calc = (function () {
    'use strict';

    class CalcService {

        constructor() {

            this.typingValue = null;
            this.resultValue = null;

            this.operation = null;

            this.flag = null;

        }

        init() {

            this.typingValue = '';
            this.resultValue = '';

            this.operation = '';

            this.flag = false;

        }


        addTypingValue(text) {

            this.typingValue += text;

        }

        getTypingValue() {

            return this.typingValue

        }

        setTypingValue(text) {

            this.typingValue = text;

        }

        getTypingValueLength() {
            return this.typingValue.length
        }

        getResultValue() {

            return this.resultValue

        }

        setResultValue(text) {

            this.resultValue = text;

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
            };

            this.operation = operations[text];

        }

        getFlag() {

            return this.flag

        }

        setFlag(flag) {

            this.flag = flag;

        }

        isTypingValueSymbol() {

            return !!this.getTypingValue().match(/\./g)

        }

    }

    var createCalcTemplate = (document) => {

        const calcElement = document.createElement('table');

        calcElement.className = 'calc-template';

        calcElement.innerHTML = `
    <tbody>
        <tr>
            <td colspan="3">0</td>
            <td colspan="1">C</td>
        </tr>

        <tr>
            <td>1</td>
            <td>2</td>
            <td>3</td>
            <td>+</td>
        </tr>
            
        <tr>
            <td>4</td>
            <td>5</td>
            <td>6</td>
            <td>-</td>
        </tr>
            
        <tr>
            <td>7</td>
            <td>8</td>
            <td>9</td>
            <td>X</td>
        </tr>
            
        <tr>
            <td>.</td>
            <td>0</td>
            <td>=</td>
            <td>/</td>
        </tr>
    </tbody>
    `;

        return calcElement
    };

    const isNumber = text => !isNaN(text);

    const add = (result, value) => result + value;
    const subtrac = (result, value) => result - value;
    const multiple = (result, value) => result * value;
    const div = (result, value) => result / value;

    const calculation = (result, operation, value) => {

        const funcs = {
            '+' : add,
            '-' : subtrac,
            '*' : multiple,
            '/' : div
        };

        operation = operation.toString();
        result = +result;
        value = +value;

        return funcs[operation](result, value)

    };

    const toComma = (text, digit) => {

        const arr = text.toString().split('.');

        const integer = arr[0];
        const decimal = arr[1] ? `.${ arr[1].slice(0, digit) }` : '';

        const result = integer.replace(/\B(?=(\d{3})+(?!\d))/g, ',') + decimal;

        return result

    };

    class CalcRenderer {

        constructor() {

            this.calcElement = createCalcTemplate(document);
            this.OnCell = null;
            this.OnClear = null;
            this.OnEqual = null;
            this.OnSymbol = null;

        }

        init() {

            this.calcElement.addEventListener('click' , this.handleClick.bind(this));

        }

        getElement() {

            return this.calcElement

        }

        setOnCell(OnCell) {

            this.OnCell = OnCell;

        }

        setOnClear(OnClear) {

            this.OnClear = OnClear;

        }

        setOnEqual(OnEqual) {
            
            this.OnEqual = OnEqual;

        }

        setOnSymbol(OnSymbol) {

            this.OnSymbol = OnSymbol;

        }

        isCell(element) {

            return (element.tagName === 'TD' && element.getAttribute('colspan') !== '3')

        }

        handleClick(event) {

            const { target } = event;

            switch (target.innerText) {
                case 'C': return this.OnClear()
                case '=': return this.OnEqual()
                case '.': return this.OnSymbol()
                default: break
            }

            if (this.isCell(target)) this.OnCell(target.innerText);

        }

        setScreen(text, isSymbol) {

            const symbol = (isSymbol ? '.' : '');

            this.calcElement.querySelector('td').innerText = toComma(text, 5) + symbol;

        }

    }

    class Calc {

        constructor(rootElement) {
            
            this.rootElement = rootElement;
            this.service = new CalcService();
            this.renderer = new CalcRenderer();

        }

        init() {

            this.getElement()
                .appendChild(this.renderer.getElement());

            this.renderer.init();
            this.renderer.setOnCell(this.OnCell.bind(this));
            this.renderer.setOnClear(this.OnClear.bind(this));
            this.renderer.setOnEqual(this.OnEqual.bind(this));
            this.renderer.setOnSymbol(this.OnSymbol.bind(this));

            this.service.init();
        }

        getElement() {
            return this.rootElement
        }

        OnCell(text) {

            if (isNumber(text)) {

                if (this.service.getTypingValueLength() < 10) {

                    this.service.getFlag() && (this.service.setTypingValue(''), this.service.setFlag(false));

                    this.service.addTypingValue(text);
                    this.renderer.setScreen(this.service.getTypingValue());

                }

            } else {

                if (!this.service.getResultValue()) this.service.setResultValue(this.service.getTypingValue());
                else if ( 
                    this.service.getTypingValue() && 
                    !this.service.getFlag() 
                ) (
                    this.service.setResultValue(
                        calculation(
                            this.service.getResultValue(), 
                            this.service.getOperation(), 
                            this.service.getTypingValue())),
                    this.renderer.setScreen(this.service.getResultValue())
                );

                this.service.setFlag(true);
                this.service.setOperation(text);

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

            this.service.init();
            this.renderer.setScreen('0');

        }

        OnEqual() {

            if (this.service.getTypingValue() && this.service.getOperation()) {

                !this.service.getResultValue() && this.setResultValue(0);

                this.service.setResultValue(calculation(this.service.getResultValue(), this.service.getOperation(), this.service.getTypingValue()));

                this.renderer.setScreen(this.service.getResultValue());

                this.service.setFlag(true);

            }

        }

        OnSymbol() {

            if (!this.service.isTypingValueSymbol()) {

                this.service.addTypingValue('.');

                this.renderer.setScreen(this.service.getTypingValue(), true);

            }

        }

    }

    return Calc;

}());
