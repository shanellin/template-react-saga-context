import React from "react"

export const orderDefault = {
  name: "",
  number: 0,
  price: 0
}

export const OrderContext = React.createContext(orderDefault)
OrderContext.displayName = "ContextForOrderDetail"