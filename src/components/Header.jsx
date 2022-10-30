import React from 'react';
import styled from 'styled-components';
import { GiEgyptianProfile } from 'react-icons/gi';

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  //-color: whitesmoke;
  padding: 1rem 2rem;
`;

const Menu = styled.ul`
  display: flex;
  justify-content: space-between;
  list-style: none;
`;

const Item = styled.li`
  margin-left: 1rem;
  font-size: 1.2rem;
  cursor: pointer;
  font-weight: 500;
`;

const Logo = styled.span`
  display: flex;
  align-items: center;
  font-size: 1.5rem;
  color: goldenrod;
  cursor: pointer;
`;

const Header = () => {
  return (
    <Container>
      <Logo>
        <GiEgyptianProfile /> DT
      </Logo>
      <div>
        <Menu>
          <Item>About me</Item>
          <Item>My Projects</Item>
          <Item>Contact Me</Item>
        </Menu>
      </div>
    </Container>
  );
};

export default Header;
