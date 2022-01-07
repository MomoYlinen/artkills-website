import React from 'react'
import {SidebarContainer,Icon,CloseIcon, SidebarWrapper,SidebarMenu,SidebarLink,SideBtnWrap,SidebarRoute} from './SidebarElements'
import {FaInstagram} from 'react-icons/fa'

const Sidebar = ({isOpen,toggle}) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to='about' onClick={toggle}>
                        About
                    </SidebarLink>
                    <SidebarLink to='discover' onClick={toggle}>
                        Discover
                    </SidebarLink>
                    <SidebarLink to='services' onClick={toggle}>
                        TBA
                    </SidebarLink>
                    <SidebarLink to='signup' onClick={toggle}>
                        TBA
                    </SidebarLink>
                </SidebarMenu>
                <SideBtnWrap>
                    <SidebarRoute a target='_blank' href='https://www.instagram.com/artkillsband/' onClick={toggle}>
                        <FaInstagram/>
                    </SidebarRoute>
                </SideBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar
