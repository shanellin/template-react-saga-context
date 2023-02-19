import React, { useContext, useState } from "react"
// Components
import { HSpace, Row, VSpace, Text } from "@layout"
// Styles
// Libs
import { OrderContext } from "../../utils/context/order-context"

const OrderDetail = () => {
  const { orderData, orderDispatch } = useContext(OrderContext)

  return (
    <>
      <div>
        <input type="text" placeholder="input order's name" onChange={(event) => orderDispatch({ type: "UPDATE_ORDER", key: "name", value: event.target.value })} />
        <VSpace length={5} />
        <input type="text" placeholder="input order's number" onChange={(event) => orderDispatch({ type: "UPDATE_ORDER", key: "number", value: event.target.value })} />
        <VSpace length={5} />
        <input type="text" placeholder="input order's price" onChange={(event) => orderDispatch({ type: "UPDATE_ORDER", key: "price", value: event.target.value })} />
      </div>
      <VSpace length={5} />
      <Text>order name: {orderData.name}</Text>
      <VSpace length={5} />
      <Text>order number: {orderData.number}個</Text>
      <VSpace length={5} />
      <Text>order price: {orderData.price}個/元</Text>
      <VSpace length={5} />
      {orderData.number && orderData.price ? <Text>order total: {orderData.number * orderData.price}元</Text> : null}
    </>
  )
}

export default OrderDetail