import { orderDefault } from "../../../utils/context/order-context"

export const types = {
  INIT_ORDER: "INIT_ORDER",
  UPDATE_ORDER: "UPDATE_ORDER"
}

export const reducer = (state, action) => {
  switch (action.type) {
    case "INIT_ORDER":
      return { ...state, ...orderDefault }
    case "UPDATE_ORDER":
      return updateOrder(state, action)
    default:
      throw new Error()
  }
}

function updateOrder(state, action) {
  return {
    ...state,
    [action.key]: action.value
  }
}