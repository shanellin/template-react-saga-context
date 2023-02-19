import { createTheme } from "@material-ui/core/styles"

export const theme = {
  fontFamily: "Roboto Regular",
  fontSize: {
    xs: 12 + "px",
    s: 14 + "px",
    m: 16 + "px",
    l: 18 + "px",
    xl: 24 + "px"
  },
  fontWeight: {
    n: "normal",
    m: 500,
    b: "bold"
  },
  palette: {
    background: {
      normal: "#ffffff",
      stdDisabled: "#e7e7e7",
      greyFilled: "#fafafa",
      divider: "#e8e8e8"
    },
    input: {
      caret: {
        normal: "#f57a1b"
      },
      shadow: {
        outerShadow: "rgba(0, 0, 0, 0.075)",
        innerShadow: "rgba(251, 80, 4, 0.6)"
      }
    },
    primary: {
      lv2Light: "#f57a1b",
      light: "#f47920",
      normal: "#ff3b00",
      dark: "#f03200"
    },
    secondary: {
      normal: "#919191"
    },
    text: {
      primary: {
        lv2Highlight: "#ff3b00",
        highlighted: "#f57a1b",
        normal: "#595959",
        error: "#bcbcbe",
        placeholder: "#bcbcbe"
      },
      onPrimary: {
        normal: "#ffffff"
      },
      onSecondary: {
        normal: "#595959"
      }
    },
    border: {
      primary: {
        normal: "#d9d9d9",
        error: "#ff0012",
        highlighted: "#fb5004"
      }
    },
    green: {
      normal: "#14a10d"
    }
  }
}

const muiTheme = createTheme({
  palette: {
    primary: {
      main: theme.palette.primary.normal,
      contrastText: theme.palette.text.onPrimary.normal,
      background: {
        stdDisabled: theme.palette.background.stdDisabled
      }
    },
    secondary: {
      main: theme.palette.secondary.normal,
      contrastText: theme.palette.text.onSecondary.normal
    }
  }
})

export default muiTheme
