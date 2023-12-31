import styled from "styled-components";
import {Link} from "react-router-dom";

export const NavbarContainer = styled.nav`
width: 100%;
height: ${(props) => (props.navextend ? '50vh': '80px')};
background-color:black;
display:flex;
flex-direction:column;`

export const LeftContainer = styled.div`
flex: 70%;
display: flex;
align-items: center;
padding-left:5%;`

export const RightContainer = styled.div`
flex: 30%;
display: flex;
justify-content:flex-end;
padding-right:50px;`


export const NavbarInnerContainer = styled.div`
width:100%;
height:80px;
display:flex;`


export const NavbarLinkContainer = styled.div`
display:flex;`

export const NavbarLink = styled(Link)`
color:white;
font-size: x-large;
font-family: Arial, Helvetica, sans-serif;
text-decoration:none;
margin:10px;

@media (max-width: 700px){
    display: none;
}
`

export const NavbarLinkExtend = styled(Link)`
color:white;
font-size: x-large;
font-family: Arial, Helvetica, sans-serif;
text-decoration:none;
margin:10px;
`





export const Logo = styled.img`
margin:10px;
max-width:180px;
height:auto;`

export const OpenLinkButton = styled.button`
width: 70px;
height:50px;
background:none;
border: none;
color:white;
font-size:45px;
cursor: pointer;

@media (min-width: 700px){
    display: none;
}`

export const NavbarExtendedContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    align-items: center;

`;