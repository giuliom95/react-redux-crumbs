export function doOperationAction(number) {
  return {
    type: "DO_OPERATION",
    number: number
  }
}

export function changeOperationAction(newOp) {
  return {
    type: "CHANGE_OPERATION",
    newOp: newOp
  }
}

export function resetStateAction(){
  return {
    type: "RESET_STATE"
  }
}
