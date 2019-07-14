export const isNumber = text => !isNaN(text)

export const calculation = (result, operation, value) => eval(`${ result }${ operation }${ value }`)

export const toComma = (text, digit) => {

    const arr = text.toString().split('.')

    const integer = arr[0]
    const decimal = arr[1] ? `.${ arr[1].slice(0, digit) }` : ''

    const result = integer.replace(/\B(?=(\d{3})+(?!\d))/g, ',') + decimal

    return result

}