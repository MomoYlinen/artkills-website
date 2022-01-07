import React, {useState} from 'react'
import Photo from '../../images/_SMR3564.jpg'
import Picture from '../../images/artkillslogotextred.png'
import { HeroContainer,HeroBg,VideoBg, HeroContent, HeroH1,Img} from './HeroElements'
import {Button} from '../ButtonElement'

const HeroSection = () => {
    const [hover,setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }
    
    return (
        <>
        <HeroContainer id='home'>
            <HeroBg>
                <VideoBg src={Photo} />
            </HeroBg>
            <HeroContent>

                <HeroH1><Img src={Picture}/></HeroH1>
            </HeroContent>
        </HeroContainer>
        </>
    )
}

export default HeroSection
