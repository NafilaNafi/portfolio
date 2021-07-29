import React from 'react';
import styled from 'styled-components';
import {InnerLayout} from '../styles/Layouts';
import Title from '../Components/Title';
import SmallTitle from '../Components/SmallTitle';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import SchoolIcon from '@material-ui/icons/School';
import ResumeItem from '../Components/ResumeItem';

function Resume() {
    const briefcase = <BusinessCenterIcon />
    const school = <SchoolIcon />
    return (
      <ResumeStyled>
        <Title title={"Education"} span={"Education"} />
        <InnerLayout>
          <div className="small-title u-small-title-margin">
            <SmallTitle icon={school} title={"Educational Qualifications"} />
          </div>
          <div className="resume-content ">
            <ResumeItem
              year={"2016 - 2019"}
              title={"BCA (COMPUTER APPLICATIONS)"}
              subTitle={"University of Madras"}
            />
          </div>
          <div className="small-title">
            <SmallTitle icon={briefcase} title={"Trainings & Internships"} />
          </div>
          <div className="resume-content">
            <ResumeItem
              year={"March 2021 - July 2021"}
              title={"FullStack Developer / Mernstack Bootcamp"}
              subTitle={
                "Learned in GUVI GEEK NETWORKS, IITM RESEARCH PARK, CHENNAI, TAMILNADU"
              }
            />
            <ResumeItem
              year={"March 2020 - May 2020"}
              title={"A Complete ReactJs Bootcamp"}
              subTitle={"LEARN CODE ONLINE PVT LTD."}
            />
            <ResumeItem
              year={"Sept 2019 - Nov 2019"}
              title={"Frontend Web Developer Bootcamp"}
              subTitle={"LEARN CODE ONLINE PVT LTD."}
            />
            <ResumeItem
              year={"April 2019 - Sept 2019"}
              title={"Fullstack Developer Internship"}
              subTitle={"SHANJOS TECHNOLOGIES PVT LMTD, COIMBATORE,TAMILNADU."}
            />
            <ResumeItem
              year={"May 2018 - Oct 2018"}
              title={"Web Developer Internship"}
              subTitle={"ABILE TECHNOLOGIES PVT LMTD, COIMBATORE,TAMILNADU."}
            />
          </div>
          <div className="small-title u-small-title-margin">
            <SmallTitle icon={school} title={"Certifications"} />
          </div>
          <div className="resume-content ">
            <ResumeItem
              year={"24 April 2021 - 25 April 2021"}
              title={"GUINNESS RECORD EVENT"}
              subTitle={
                'Participation in the Guinness Record Event Conducted By IIT Madras Incubated Startups GUVI And AICTE "event- AI FOR INDIA".'
              }
            />
            <ResumeItem
              year={"2018 - 2018"}
              title={"BRITISH COUNSIL, CHENNAI"}
              subTitle={
                "Certified For Communication Skill At The Level Of Language (Conversation Course)"
              }
            />
            <ResumeItem
              year={"2019 - 2020"}
              title={
                "FULLSTACK MERN BOOTCAMP"
              }
              subTitle={"LEARN CODE ONLINE PVT LTD. "}
            />
            <ResumeItem
              year={"2019 - 2020"}
              title={"FULLSTACK WITH REACTJS & NODEJS"}
              subTitle={
                "Professional Devolopment Courses In Udemy MOOC(Online) Platform With Technical Certifications In Front-end, Backend & Mernstack Development To Get Trained And Attain Aquire Skills."
              }
            />
          </div>
        </InnerLayout>
      </ResumeStyled>
    );
}

const ResumeStyled = styled.section`
    .small-title{
        padding-bottom: 3rem;
    }
    .u-small-title-margin{
        margin-top: 4rem;
    }

    .resume-content{
        border-left: 2px solid var(--border-color);
    }
`;
export default Resume
