import React from 'react'
import styled from 'styled-components'
import Image from 'next/image'
import IconButton from '@mui/material/IconButton'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

const Pin = () => {
  return (
    <Wrapper>
        <Container>
            <ImageContainer>
                <Image width={236} height={300} 
                src='https://images.unsplash.com/photo-1558244661-d248897f7bc4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1035&q=80' />
            </ImageContainer>
            <Floating>
                <IconButton>
                    <FavoriteBorderIcon fontSize="medium" style={{ color: 'white'}} />  
                    {/* <AddShoppingCartIcon fontSize="large" style={{ color: 'white'}} stroke={"grey"} stroke-width={1}/>   */}
                </IconButton>
            </Floating>
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
    position: relative; 
    display: flex;
    align-items: center;
    box-sizing: border-box;
    cursor: pointer;
    img {
        width: 100%;
        display: flex;
        cursor: zoom-in;
        border-radius: 16px;
        object-fit: cover;
    }
`;

const ImageContainer = styled.div`
    display: block;
`

const Floating = styled.div`
    position: absolute; 
    top: 0; 
    right: 0;
    
`;