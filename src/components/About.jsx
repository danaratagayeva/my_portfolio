import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  height: 85vh;
  width: 100%;
`;

const Title = styled.h1`
  text-align: center;
  margin: 1.5rem 0;
  color: goldenrod;
`;
const Content = styled.div`
  display: flex;
  width: 100%;
`;
const Image = styled.img`
  width: 100%;
  border-radius: 50%;
`;
const Info = styled.p`
  line-height: 1.6;
  font-size: 1.5rem;
`;
const ImgContainer = styled.div`
  flex: 1;
  padding: 3rem 3rem;
`;

const InfoContainer = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 3rem 3rem;
`;
const About = () => {
  return (
    <Container>
      <Title>About Me</Title>
      <Content>
        <ImgContainer>
          <Image src='/img/photo.jpeg' />
        </ImgContainer>
        <InfoContainer>
          <Info>
            I am a Software Engineer focused on Frontend Development
            specializing in modern JavaScript stack with experience in the
            latest web technologies, including React, TypeScript, and Node.js.
            Always on the lookout for great software projects to contribute to,
            I love working on web applications that expand my knowledge about
            software development and work in an Agile fashion.
          </Info>
        </InfoContainer>
      </Content>
    </Container>
  );
};

export default About;
