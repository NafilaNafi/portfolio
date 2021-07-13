import React from 'react'
import styled from 'styled-components';
import {InnerLayout} from '../styles/Layouts';
import Title from '../Components/Title';
import ProgressBar from './ProgressBar';

function Skills() {
    return (
        <SkillsStyled>
            
                <Title title={'Professional Skills'} span={'Professional Skills'} />
                <InnerLayout>
                    <div className="skills">
                        <ProgressBar 
                            title={'HTML / CSS / Bootstrap'}
                            width={'90%'}
                            text={'90%'}
                        />
                        <ProgressBar 
                            title={'JAVASCRIPT / TYPESCRIPT'}
                            width={'85%'}
                            text={'85%'}
                        />
                        <ProgressBar 
                            title={'Node & Express'}
                            width={'75%'}
                            text={'75%'}
                        />
                        <ProgressBar 
                            title={'React Js'}
                            width={'75%'}
                            text={'75%'}
                        />
                        <ProgressBar 
                            title={'MongoDB'}
                            width={'75%'}
                            text={'75%'}
                        />
                        <ProgressBar 
                            title={'UI/UX - Figma'}
                            width={'85%'}
                            text={'85%'}
                        />
                        <ProgressBar 
                            title={'Ubuntu / VSCode / Git / Heroku'}
                            width={'100%'}
                            text={'100%'}
                        />
                    </div>
                </InnerLayout>
        </SkillsStyled>
    )
}

const SkillsStyled = styled.section`
    .skills{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-row-gap: 2rem;
        grid-column-gap: 3rem;
        @media screen and (max-width: 700px){
            grid-template-columns: repeat(1, 1fr);
        }
    }
`;

export default Skills;
