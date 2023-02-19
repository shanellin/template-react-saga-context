import React from "react"

const userDefault = {
  name: "",
  age: "",
  email: ""
}

export const UserContext = React.createContext(userDefault)
UserContext.displayName = "ContextForUserDetail"