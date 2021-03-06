import React from 'react'
import styled from 'styled-components'
import Pin from './Pin'

const Mainboard = () => {
  return (
    <Wrapper>
        <Container>
            <Pin />
        </Container>
    </Wrapper>
  )
}

export default Mainboard

const Wrapper = styled.div`
    background-color: white;
    display: flex;
    justify-content: center;
    width: 100%;
    height: 100%;
    margin-top: 18px;
`

const Container = styled.div`
    display: flex;
    background-color: white;
    width: 80%;
`