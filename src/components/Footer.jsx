import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem 0;
  color: gray;
`;

const Footer = () => {
  return (
    <Container>Copyright © 2022 Dana Tagayeva. All rights reserved.</Container>
  );
};

export default Footer;
