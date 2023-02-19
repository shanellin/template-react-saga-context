import React, { useReducer, useState } from "react"
import { OrderContext, orderDefault } from "../../utils/context/order-context"
import { orderReducer } from "./index"

export const OrderProvider = (props) => {
  const [orderData, orderDispatch] = useReducer(orderReducer, orderDefault)
  const value = {
    orderData,
    orderDispatch,
  }
  return <OrderContext.Provider value={value} {...props} />
}