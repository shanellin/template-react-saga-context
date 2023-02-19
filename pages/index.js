import { useDispatch, useSelector } from "react-redux"
import React, { useEffect, useState, useContext } from "react"
// Libs
import { actionTypes, makeAction, makePromiseAction } from "@actions"
import { Config } from "@selector"
import api from "../states/apiServices"
import { PageName } from "@constants"
// Components
import withMainLayout from "@components/hoc/create-main-layout"
import { HSpace, Row, VSpace, Text, Divider } from "@layout"
import Head from "next/head"
import { UserProvider, Count, UserDetail, RenderWithContext, RenderWithoutContext } from "../components/userDetail/index"
import { OrderProvider, OrderDetail } from "../components/orderDetail/index"
// Styles

const DefaultPage = ({ query, parent }) => {
  console.log("DefaultPage render!!!!");
  const dispatch = useDispatch()
  const mainConfig = useSelector(Config)
  // const mainNumber = useSelector(state => state.main.number)

  useEffect(() => {
    dispatch(makeAction(actionTypes.APP_LOAD_CONFIG))
  }, [])

  // console.log(mainNumber);

  return (
    <>
      <Head>
        <title>{"Title"}</title>
        <meta name="Description" content={"Description"} />
      </Head>
      <div style={{ padding: "20px 0px" }}>
        <Text>{mainConfig?.data} - {mainConfig?.number}</Text>
        <VSpace length={10} />
        <Row>
          <button onClick={() => dispatch(makeAction(actionTypes.APP_ADD_COUNT))}>add main count (won't re-render)</button>
          <HSpace length={10} />
          <button onClick={() => dispatch(makeAction(actionTypes.APP_SET_COUNT_CONFIG))}>set main count (will re-render)</button>
        </Row>
        <VSpace length={10} />
        <Row>
          <Text>parent theme: {parent.theme}</Text>
          <HSpace length={10} />
          <button onClick={() => parent.toggleTheme()}>toggle theme</button>
        </Row>
        <UserProvider>
          <UserDetail />
          <VSpace length={10} />
          <Divider />
          <VSpace length={10} />
          <RenderWithContext />
          <RenderWithoutContext />
          <Count />
        </UserProvider>
        <VSpace length={10} />
        <Divider />
        <VSpace length={10} />
        <OrderProvider>
          <OrderDetail />
        </OrderProvider>
      </div>
    </>
  )
}

DefaultPage.displayName = PageName.default

export default withMainLayout(DefaultPage, {
  pageTitle: "pageTitle"
})
