import React, { useState } from 'react';
import {NavbarContainer, LeftContainer,RightContainer, NavbarLinkExtend, NavbarInnerContainer, NavbarLink, Logo, OpenLinkButton, NavbarExtendedContainer, NavbarLinkContainer} from "../styles/Header.style";
import LogoImg from "../Components/assets/logo.jpg";
const Header = () => {

  const [navextend, setNavExtend] = useState(false); 

  return (
        <NavbarContainer navextend={navextend}>
          <NavbarInnerContainer>
            <LeftContainer>
              <NavbarLinkContainer>
                <NavbarLink to="/">Home</NavbarLink>
                <NavbarLink to="/about">About</NavbarLink>
                <NavbarLink to="/services">Services</NavbarLink>
                <NavbarLink to="/contact">Contact</NavbarLink>
                <OpenLinkButton onClick={()=>{
                  setNavExtend((value)=> !value )
                }}>
                  {navextend ? <>&#10005;</>:<>&#8801;</>}
                  </OpenLinkButton>
              </NavbarLinkContainer>
            </LeftContainer>
            <RightContainer>
              <Logo src={LogoImg}></Logo>
            </RightContainer>
            </NavbarInnerContainer>
           {navextend && ( 
           <NavbarExtendedContainer>
            <NavbarLinkExtend to="/">Home</NavbarLinkExtend>
                <NavbarLinkExtend to="/about">About</NavbarLinkExtend>
                <NavbarLinkExtend to="/services">Services</NavbarLinkExtend>
                <NavbarLinkExtend to="/contact">Contact</NavbarLinkExtend>
            </NavbarExtendedContainer>)}
        </NavbarContainer>
  )
}

export default Header
