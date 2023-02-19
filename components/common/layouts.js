import styled, { css } from "styled-components"
import { colors } from "@constants"

export const Base = styled.div`
  flex: 1;
  width: 100%;
  margin: auto;
  max-width: 940px;
  position: relative;
`

export const VSpace = styled.div`
  flex-shrink: 0;
  height: ${(props) => props.length}px;
`

export const HSpace = styled.div`
  flex-shrink: 0;
  width: ${(props) => props.length}px;
`

export const Expand = styled.div`
  flex-grow: 1;
`

export const Divider = styled.div`
  width: 100%;
  flex-shrink: 0;
  height: ${(props) => (props.depth ? `${props.depth}px` : "1px")};
  background-color: ${(props) => (props.color ? props.color : `${colors.very_light_pink_five}`)};
`

export const Row = styled.div`
  display: flex;
  position: relative;
  justify-content: ${(props) => props.justifyContent};
  flex-direction: ${(props) => (props.reverse ? "row-reverse" : "row")};
  align-items: ${(props) => (props.alignItems ? props.alignItems : "center")};
  ${({ maxWidth }) => maxWidth ? css`
    max-width: ${maxWidth};
  ` : null}
  ${({ padding, width, margin, flex, borderBottom }) => css`
    flex: ${flex};
    margin: ${margin};
    padding: ${padding};
    width: ${width};
    border-bottom: ${borderBottom ? `1px solid ${colors.very_light_pink_five}` : "none"};
  `}
`

export const Column = styled(Row)`
  display: flex;
  position: relative;
  flex-direction: ${(props) => (props.reverse ? "column-reverse" : "column")};
  align-items: ${({ alignItems }) => (alignItems ? alignItems : "flex-start")};
`

export const Text = styled.span`
  ${({ size, color, weight, underline, margin, width, s, m, minWidth, textAlign, cursor }) => `
    margin: ${margin};
    cursor: ${cursor || "unset"}
    width: ${width ? width : "unset"};
    text-align: ${textAlign || "unset"};
    font-size: ${size ? size + "px" : "16px"};
    font-weight: ${weight ? weight : "normal"};
    min-width: ${minWidth ? minWidth : "unset"};
    color: ${color ? color : colors.light_black_two};
    text-decoration: ${underline ? "underline" : "unset"};
  `}
`
