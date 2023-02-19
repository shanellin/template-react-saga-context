import React, { useEffect, useState, useContext } from "react"
import { UserContext } from "../../utils/context/user-context"

export const UserProvider = (props) => {
  const [count, setCount] = useState(0)
  const [message, setMessage] = useState('Hello from Context!')
  const [detail, setDetail] = useState({
    name: "shanelin",
    age: 27,
    email: "xxx@xxx.xxx"
  });
  const value = {
    count,
    setCount,
    detail,
    setDetail,
    message,
    setMessage
  }
  return <UserContext.Provider value={value} {...props} />
}

export const Count = () => {
  const { count, setCount } = useContext(UserContext)
  return (
    <div>
      <h2>Current count from context: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  )
}