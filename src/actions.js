export function addNumberAction(number) {
  return {
    type: "ADD_NUMBER",
    number: number
  }
}

export function subtractNumberAction(number) {
  return {
    type: "SUBTRACT_NUMBER",
    number: number
  }
}

export function multiplyNumberAction(number) {
    return {
    type: "MULTIPLY_NUMBER", 
    number: number
  }
}
