import react from 'react';
import Header from './components/Header.jsx';
import About from './components/About.jsx';
import Projects from './components/Projects.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import Main from './components/Main.jsx';
import styled from 'styled-components';

const Container = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  background-color: whitesmoke;
`;

const Wrapper = styled.div`
  margin: 0 1rem;
`;

function App() {
  return (
    <Container>
      <Wrapper>
        <Header />
        <Main />
        <About />
        <Projects />
        <Contact />
        <Footer />
      </Wrapper>
    </Container>
  );
}

export default App;
