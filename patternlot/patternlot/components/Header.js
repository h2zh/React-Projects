import React, { useState } from 'react'
import styled from 'styled-components'
import Image from 'next/image'
import Link from 'next/link'
import IconButton from '@mui/material/IconButton'
import BasicMenu from './BasicMenu'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SearchIcon from '@mui/icons-material/Search';
import FavoriteIcon from '@mui/icons-material/Favorite';
import NotificationsIcon from '@mui/icons-material/Notifications';
import FaceIcon from '@mui/icons-material/Face';
import { style } from '@mui/system'

const Header = () => {
  const [input, setInput] = useState("");
  const onSearchSubmit = (e) => {
    e.preventDefault(); // prevent button's auto jump to another page
    console.log("this is the input", input);
  }
  return (
    <Wrapper>
      <LogoWrapper>
        <IconButton variant="contained">
          <Image src='/logo.webp' width={100} height={30} alt='logo' />
          {/* In Next.js, to reference logo.svg from the public folder simply use src="/logo.svg" */}
        </IconButton>
      </LogoWrapper>
      <HomePageButton>
        <Link href='/'>Home</Link>
      </HomePageButton>
      <CategoryWrapper>
        <BasicMenu ></BasicMenu>
        <KeyboardArrowDownIcon style={{marginLeft: '-11px'}}/>
      </CategoryWrapper>
      
      <SearchWrapper>
        <SearchBarWrapper>
          <IconButton>
            <SearchIcon />
          </IconButton>
          <form>
            <input type='text' onChange={ (e) => setInput(e.target.value) }></input>
            <button type='submit' onClick={onSearchSubmit}></button>
          </form>
        </SearchBarWrapper>
      </SearchWrapper>
      <IconsWrapper>
        <IconButton>
          <FavoriteIcon style={{color: 'black'}} />
        </IconButton>
        <IconButton>
          <NotificationsIcon style={{color: 'black'}} />
        </IconButton>
        <IconButton>
          <FaceIcon style={{color: 'black'}}/>
        </IconButton>
        <IconButton>
          <KeyboardArrowDownIcon style={{color: 'black'}} />
        </IconButton>
      </IconsWrapper>
    </Wrapper> 
  )
}

export default Header

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  height: 56px;
  padding: 18px 4px 4px 18px;
  background-color: white;
  color: black;
`;

const LogoWrapper = styled.div`
  padding: 0px 20px 5px 0px;
  font-size: 32px;
  cursor: pointer;
`;

const HomePageButton = styled.div`
  display: flex;
  align-items: center;
  height: 48px;
  min-width: 83px; 
  justify-content: center;
  border-radius: 24px;
  cursor: pointer;
  background-color: rgb(17,17,17);

  a {
    text-decoration: none;
    color: white;
    font-weight: 700;
  }
`;

const CategoryWrapper = styled.div`
    display: flex;
    align-items: center;
    height: 48px;
    min-width: 127px;
    justify-content: center;
    border-radius: 24px;
    cursor: pointer;
    color: black;
    background-color: white;

    Button {
      text-transform: none;
    }

  
`;

const SearchWrapper = styled.div`
    flex: 1;
    margin-right: 7px;
`;

const SearchBarWrapper = styled.div`
    background-color: #efefef;    
    display: flex;
    height: 48px;
    width: 100%;
    border-radius: 50px;
    border: none;
    padding-left: 10px;
    
    form {
      display: flex;
      flex: 1;
    }
    form > input {
      background-color: transparent;
      border: none;
      width: 100%;
      margin-left: 5px;
      font-size: 16px;
    }
    form > button {
      display: none;
    }

    *:focus {
      outline: none; 
    }
    input:active {
      outline: none;
    }
    input:hover {
      outline: none;
    }
`;

const IconsWrapper = styled.div`

`;