import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  height: 80vh;
`;
const Intro = styled.p`
  text-align: left;
  font-size: 5rem;
  padding: 5rem 0;
`;

const Main = () => {
  return (
    <Container>
      <Intro>
        A <strong>frontend engineer </strong>passionate about creating
        interactive websites and user friendly application experience
      </Intro>
    </Container>
  );
};

export default Main;
