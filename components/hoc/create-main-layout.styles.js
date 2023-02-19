import { colors } from "../../constants/colors"
import styled, { css } from "styled-components"
import assetPrefix from "@prefix"

export const LayoutWrapper = styled.div`
  position: relative;
`
// sticky top start
export const StickyTopArea = styled.div`
  position: fixed;
  width: 100%;
  height: 60px;
  background: white;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
  top: 0;
  left: 0;
  right: 0;
`

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
`
export const HeaderLeft = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  @media only screen and (max-width: 900px) {
    position: static;
  }
`

export const MenuIcon = styled.img.attrs({
  src: `${assetPrefix}/images/btn-menu.png`,
  alt: "Menu Icon"
})`
  display: block;
  width: 20px;
  height: 12px;
  padding: 24px 20px;
  background-color: ${colors.orange_two};
  object-fit: contain;
  transition: all 0.55s ease-in-out;
  cursor: pointer;
`

export const PageTitle = styled.div`
  font-size: ${(props) => props.theme.fontSize.m};
  font-weight: bold;
  color: ${colors.greyish_brown_two};
  margin: 0 auto;
  line-height: 60px;
`

export const ContentWrapper = styled.div`
  position: relative;
  min-height: 100vh;
`

// sticky left start
export const StickyLeftArea = styled.div`
  z-index: 1;
  position: fixed;
  top: 60px;
  min-height: 100vh;
  height: 100%;
  height: -moz-available;
  height: -webkit-fill-available;
  height: fill-available;
  background: #58595b;
  transition: all 0.55s ease-in-out;
  min-width: ${(props) => (props.isExpand ? "300px" : "60px")};
`

export const FooterCopyRight = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  width: -moz-available;
  width: -webkit-fill-available;
  width: fill-available;
  border-top: 1px solid ${colors.very_light_pink_five};
  font-size: ${(props) => props.theme.fontSize.xs};
  color: ${colors.brown_grey_two};
  transition: all 0.55s ease-in-out;
  padding: ${(props) => (props.isExpand ? "15px 20px 23px 20px" : "15px 20px 23px 80px")};
`

export const RightContent = styled.div`
  transition: all 0.55s ease-in-out;
  padding-left: ${(props) => (props.isExpand ? "300px" : "0")};
  @media only screen and (max-width: 1080px) {
    margin-left: ${(props) => (props.isExpand ? "0" : "60px")};
  }
`

export const Base = styled.div`
  position: relative;
  margin: auto;
  max-width: 980px;
  width: 100%;
  padding-bottom: 160px;
`

export const Container = styled.div`
  display: flex;
  min-width: 940px;
  max-width: 940px;
  align-items: flex-start;
  padding: 60px 20px 16px;
`
