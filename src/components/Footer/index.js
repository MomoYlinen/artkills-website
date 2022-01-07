import React from 'react'
import { FaFacebook, FaInstagram, FaSpotify, FaYoutube } from 'react-icons/fa'
import {FooterContainer,FooterWrap,FooterLinksContainer,FooterLinksWrapper,FooterLinkItems,FooterLinkTitle,FooterLink,
SocialMedia,SocialMediaWrap,SocialMediaLogo,WebsiteRights,SocialIcons,SocialIconLink} from './FooterElements'

const Footer = () => {
    return (
        <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>
                                About us
                            </FooterLinkTitle>
                            <FooterLink to='/'>Home</FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>
                                About us
                            </FooterLinkTitle>
                            <FooterLink to='/'>Home</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                </FooterLinksContainer>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialMediaLogo to='/'>
                            Artkills
                        </SocialMediaLogo>
                        <WebsiteRights>
                            Copyright {new Date().getUTCFullYear()} All rights reserved.
                        </WebsiteRights>
                        <SocialIcons>
                            <SocialIconLink href='/' target='_blank' aria-label='Facebook'>
                                <FaFacebook/>
                            </SocialIconLink>
                            <SocialIconLink href='//www.instagram.com/artkillsband/' target='_blank' aria-label='Instagram'>
                                <FaInstagram/>
                            </SocialIconLink>
                            <SocialIconLink href='/' target='_blank' aria-label='Spotify'>
                                <FaSpotify/>
                            </SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>            
        </FooterContainer>
    )
}

export default Footer
