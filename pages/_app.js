import App from "next/app"
import React from "react"
import { Provider, connect } from "react-redux"
import Router from "next/router"
import getConfig from "next/config"
import withRedux from "next-redux-wrapper"
import muiTheme, { theme } from "../utils/theme"
import Config from "../utils/publicRuntimeConfig"
import withReduxSaga from "next-redux-saga"
import createStore from "../states/store"
import { actionTypes, makeAction, makePromiseAction } from "../states/actions"
import { ThemeProvider as MuiThemeProvider } from "@material-ui/core/styles"
import { ThemeProvider as EmoThemeProvider } from "emotion-theming"
import { ThemeProvider } from "styled-components"

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    console.log("App getInitialProps")

    const { store } = ctx
    const { publicRuntimeConfig: config, serverRuntimeConfig } = getConfig()
    let pageProps = {}

    try {
      if (ctx.isServer) {
      }

      if (Component.getInitialProps) {
        pageProps = await Component.getInitialProps({ ctx, config })
      }
      
      return { pageProps, config }
    } catch (err) {
      console.log("The Error happened in ", typeof window === "undefined" ? "Server" : "Client")
      return { pageProps, config }
    }
  }
  constructor(props) {
    super(props);

    this.toggleTheme = () => {
      this.setState((state) => ({
        theme: state.theme === "black" ? "white" : "black"
      }))
    }

    this.state = {
      theme: "black",
      toggleTheme: this.toggleTheme
    }
  }

  componentDidMount() {
  }

  componentDidCatch(error, errorInfo) {
  }

  render() {
    const { Component, pageProps, store } = this.props
    pageProps.parent = this.state
    return (
      <Provider store={store}>
        <MuiThemeProvider theme={muiTheme}>
          <ThemeProvider theme={theme}>
            <Component {...pageProps} />
          </ThemeProvider>
        </MuiThemeProvider>
      </Provider>
    )
  }
}

const mapStateToProps = (state) => ({
  // user: state.auth.user
})

const mapDispatchToProps = (dispatch) => ({
  // setSSOScriptLoaded: () => dispatch(makeAction(actionTypes.APP_SET_SSO_SCRIPT_LOADED))
})

const connectedMyApp = connect(mapStateToProps)(MyApp)

export default withRedux(createStore)(withReduxSaga(connectedMyApp))
