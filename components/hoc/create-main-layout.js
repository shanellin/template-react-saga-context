import React, { useState, useEffect, useRef, useCallback, memo, useMemo } from "react"
import { actionTypes, makeAction } from "../../states/actions"
import { useSelector, useDispatch } from "react-redux"
// Libs
import PageName from "../../constants/page-name"
// Components
import { VSpace, Row } from "@layout"
// Styles
import { LayoutWrapper, StickyTopArea, HeaderContainer, MenuIcon, HeaderLeft, PageTitle, ContentWrapper, StickyLeftArea, FooterCopyRight, Base, Container, RightContent } from "./create-main-layout.styles"

const getDisplayName = (WrappedComponent) => WrappedComponent.displayName || WrappedComponent.name || "Component"

function withMainLayout(WrappedComponent, hocOptions = { pageTitle: "" }) {
  const { pageTitle } = hocOptions
  const currentPageName = getDisplayName(WrappedComponent)

  const Page = ({ query, parent }) => {
    const dispatch = useDispatch()
    const wrapperRef = useRef(null)
    const [isExpand, setIsExpand] = useState(false)

    const toggleExpandMenu = useCallback(() => {
      isExpand ? setIsExpand(false) : setIsExpand(true)
    }, [isExpand])

    const expandMenu = () => {
      setIsExpand(true)
    }

    const collapseMenu = () => {
      setIsExpand(false)
    }

    const wrappedComponentProps = {
      query,
      parent
    }

    return (
      <div>
        <LayoutWrapper>
          <StickyTopArea>
            <HeaderContainer>
              <HeaderLeft>
                <MenuIcon onClick={toggleExpandMenu} />
              </HeaderLeft>
              <PageTitle>{pageTitle}</PageTitle>
            </HeaderContainer>
          </StickyTopArea>

          <ContentWrapper>
            <StickyLeftArea onMouseEnter={expandMenu} onMouseLeave={collapseMenu} isExpand={isExpand}>
            </StickyLeftArea>
            <RightContent isExpand={isExpand}>
              <Base>
                <Container>
                  <WrappedComponent {...wrappedComponentProps} />
                </Container>
              </Base>
              <FooterCopyRight isExpand={isExpand}>{"Footer Copy Right"}</FooterCopyRight>
            </RightContent>
          </ContentWrapper>
        </LayoutWrapper>
      </div>
    )
  }

  Page.getInitialProps = async (props) => {
    const { query } = props.ctx
    let req = props.req
    let isServer = req != null
    // console.log("Page getInitialProps ctx.req")
    // console.log(props.ctx)
    return { isServer, query }
  }

  Page.propTypes = {}

  Page.defaultProps = {}

  return Page
}

withMainLayout.propTypes = {}

export default withMainLayout
