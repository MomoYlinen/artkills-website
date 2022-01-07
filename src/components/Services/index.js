import React from 'react'
import { ServicesContainer,ServicesH1,ServicesWrapper,ServicesCard, ServicesIcon,ServicesH2,ServicesP } from './ServicesElements'
import Icon1 from '../../images/artkills1.jpg'

const Services = () => {
    return (
        <>
        <ServicesContainer>
            <ServicesH1> Services</ServicesH1>
            <ServicesWrapper>
                <ServicesCard>
                    <ServicesIcon src={Icon1}/>
                    <ServicesH2>Services 1</ServicesH2>
                    <ServicesP> Services</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon1}/>
                    <ServicesH2>Services2</ServicesH2>
                    <ServicesP> Services  P</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon1}/>
                    <ServicesH2>Services 3</ServicesH2>
                    <ServicesP> Services  P</ServicesP>
                </ServicesCard>
            </ServicesWrapper>
        </ServicesContainer>
            
        </>
    )
}

export default Services
