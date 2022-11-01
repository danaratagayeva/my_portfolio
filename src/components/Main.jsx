import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  height: 80vh;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;
const Intro = styled.p`
  font-size: 5rem;
  font-weight: 200;
  margin-top: 8rem;
  line-height: 1.5;
  padding: 0 2rem;
  text-indent: 10rem;
  color: #404040;
  /* border: 1px solid blue; */
  /* padding: 5rem 0; */
`;

const Main = () => {
  return (
    <Container>
      <Intro>
        A <strong>frontend engineer</strong> passionate about creating
        interactive websites and user friendly application experience.
      </Intro>
    </Container>
  );
};

export default Main;
