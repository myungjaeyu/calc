export const isNumber = text => !isNaN(text)

export const calculation = (result, operation, value) => eval(`${ result }${ operation }${ value }`)