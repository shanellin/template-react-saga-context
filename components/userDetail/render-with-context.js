import React, { useContext } from "react"
// Components
import { HSpace, Row, VSpace, Text } from "@layout"
// Styles
// Libs
import { UserContext } from "../../utils/context/user-context"

const RenderWithContext = () => {
  console.log(`render with context!!!!`);
  const { message } = useContext(UserContext)
  const getColor = () => (Math.floor(Math.random() * 255))

  return (
    <>
      <div>
        <Text color={`rgb(${getColor()},${getColor()},${getColor()})`}>render with context</Text>
      </div>
    </>
  )
}

export default RenderWithContext