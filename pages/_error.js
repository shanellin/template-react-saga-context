import Error from "next/error"

const CustomErrorPage = ({ statusCode, err }) => {
  return <Error statusCode={statusCode} />
}

CustomErrorPage.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404
  return { statusCode, err }
}

export default CustomErrorPage
