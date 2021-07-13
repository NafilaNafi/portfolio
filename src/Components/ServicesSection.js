import React from 'react';
import styled from 'styled-components';
import {InnerLayout} from '../styles/Layouts';
import Title from '../Components/Title';
import ServiceCard from '../Components/ServiceCard';
import design from '../img/design.svg';
import intelligence from '../img/intelligence.svg';
import gamedev from '../img/game-dev.svg';

function ServicesSection() {
    return (
        <InnerLayout>
            <ServicesSectionStyled>
                <Title title={'Things I love'} span={'Things I love'} />
                <h2>I've worked with a range a technologies in the web development world. From Back-end To Design.</h2>
                <div className="services">
                    <ServiceCard 
                        image={design} 
                        title={'Front-End'} 
                        paragraph={'I m more front end focused and love to work with Reactjs as well as pure HTML CSS JAVASCRIPT. '}
                    />
                    <div className="mid-card">
                        <ServiceCard 
                            image={intelligence} 
                            title={'Back-End'} 
                            paragraph={'Experience with Node and Databases.'}
                        />
                    </div>
                    <ServiceCard 
                        image={gamedev} 
                        title={'Creative Coding'} 
                        paragraph={'I love creative coding because I do both coding & designing. making beautiful art with code is very satisfying to me.'}
                    />
                </div>
            </ServicesSectionStyled>
        </InnerLayout>
    )
}

const ServicesSectionStyled = styled.section`
    .services{
        margin-top: 5rem;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 1.5rem;
        @media screen and (max-width:1000px){
            flex-direction: column;
        }
        @media screen and (max-width:950px){
            grid-template-columns: repeat(2, 1fr);
        }
        @media screen and (max-width:650px){
            grid-template-columns: repeat(1, 1fr);
        }
       
    }
`;

export default ServicesSection;
