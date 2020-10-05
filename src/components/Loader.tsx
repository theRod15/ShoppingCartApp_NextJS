import React from 'react'
import styled, { keyframes } from 'styled-components'
import { VscLoading } from 'react-icons/vsc'

const spin = keyframes`
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  
`
const StyledDiv = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  .loader-icon {
    font-size: 5rem;
    color: rgb(113 180 113);
    animation: 1s linear infinite ${spin};
  }
`

const Loader = () => {
  return (
    <StyledDiv>
      <VscLoading className="loader-icon" />
    </StyledDiv>
  )
}

export default Loader
