import React from "react"
// Components
import { HSpace, Row, VSpace, Text } from "@layout"
// Styles
// Libs

const RenderWithoutContext = ({ num }) => {
  console.log(`render without context!!!!`);
  const getColor = () => (Math.floor(Math.random() * 255))

  return (
    <>
      <div>
        <Text color={`rgb(${getColor()},${getColor()},${getColor()})`}>render without context</Text>
      </div>
    </>
  )
}

export default RenderWithoutContext