import React, { useContext, useState } from "react"
// Components
import { HSpace, Row, VSpace, Text } from "@layout"
// Styles
// Libs
import { UserContext } from "../../utils/context/user-context"

const UserDetail = () => {
  console.log("UserDetail render!!!!");
  const { detail } = useContext(UserContext)

  return (
    <>
      <Row>
        <UserContext.Consumer>
          {({ detail }) => <div>
            <h2>render with consumer</h2>
            <Text>name: {detail.name}</Text>
            <VSpace length={5} />
            <Text>age: {detail.age}</Text>
            <VSpace length={5} />
            <Text>email: {detail.email}</Text>
          </div>}
        </UserContext.Consumer>
        <HSpace length={20} />
        <div>
          <h2>render with hook useContext</h2>
          <Text>name: {detail.name}</Text>
          <VSpace length={5} />
          <Text>age: {detail.age}</Text>
          <VSpace length={5} />
          <Text>email: {detail.email}</Text>
        </div>
      </Row>
    </>
  )
}

export default UserDetail