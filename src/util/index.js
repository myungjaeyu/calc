export const isNumber = text => !isNaN(text)

export const add = (result, value) => result + value
export const subtrac = (result, value) => result - value
export const multiple = (result, value) => result * value
export const div = (result, value) => result / value

export const calculation = (result, operation, value) => {

    const funcs = {
        '+' : add,
        '-' : subtrac,
        '*' : multiple,
        '/' : div
    }

    operation = operation.toString()
    result = +result
    value = +value

    return funcs[operation](result, value)

}

export const toComma = (text, digit) => {

    const arr = text.toString().split('.')

    const integer = arr[0]
    const decimal = arr[1] ? `.${ arr[1].slice(0, digit) }` : ''

    const result = integer.replace(/\B(?=(\d{3})+(?!\d))/g, ',') + decimal

    return result

}