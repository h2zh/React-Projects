import React from 'react'
import styled from 'styled-components'
const Pin = () => {
  return (
    <Wrapper>
        <Container>

            <img src='https://images.unsplash.com/photo-1558244661-d248897f7bc4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1035&q=80' />
        </Container>
    </Wrapper>
  )
}

export default Pin

const Wrapper = styled.div`
    display: inline-flex;
    padding: 8px;
`;


const Container = styled.div`
    display: flex;
    align-items: center;
    box-sizing: border-box;
    cursor: pointer;
    width: 236px;
    img {
        width: 100%;
        display: flex;
        cursor: zoom-in;
        border-radius: 16px;
        object-fit: cover;
    }
`;