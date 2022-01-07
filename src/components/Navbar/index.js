import React from 'react'
import {FaBars, FaInstagram} from 'react-icons/fa'
import {Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu,NavItem,NavLinks,NavBtn,NavBtnLink,Img} from './NavbarElements'
import logo from '../../images/artkillslogowhite.png'

const Navbar = ({toggle}) => {
    return (
        <>
            <Nav>
                <NavbarContainer>
                    <NavLogo to='/'>
                    <Img src={logo}/>
                    </NavLogo>
                    <MobileIcon onClick={toggle}>
                        <FaBars/>
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks  to='Our Story'> Our Story</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks  to='Hear Us'> Music</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks  to='services'> TBD</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks  to='signup'> TBD</NavLinks>
                        </NavItem>
                    </NavMenu>
                    <NavBtn>
                        <NavBtnLink href='//www.instagram.com/artkillsband/' target='_blank' aria-label='Instagram' ><FaInstagram/></NavBtnLink>
                    </NavBtn>
                </NavbarContainer>
            </Nav>
        </>
    )
}

export default Navbar
