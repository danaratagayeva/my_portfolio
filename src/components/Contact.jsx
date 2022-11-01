import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  border: 1px solid gray;
  border-radius: 1rem;
  /* height: 40vh; */
`;

const Wrapper = styled.div`
  padding: 1rem 1rem;
  display: flex;
  /* gap: 5rem; */
`;

const Text = styled.h1`
  flex: 1;
  justify-content: center;
  margin-left: 1rem;
  color: goldenrod;
  font-size: 4.5rem;
  font-weight: 400;
  padding: 3rem 2.5rem;
`;

const Form = styled.div`
  flex: 1;
  /* display: flex;
  flex-direction: column; */
  //justify-content: center;
  //border: 1px solid red;
  //margin: 0 1.5rem;
`;

const FormContainer = styled.div`
  width: 100%;
  // border: 1px solid black;
  display: flex;
  flex-direction: column;
  padding: 3rem 3rem;
`;

const Label = styled.h4`
  margin-bottom: 0.5rem;
  font-size: 1.5rem;
  font-weight: 400;
  color: goldenrod;
`;

const Input = styled.input`
  font-size: 1rem;
  border: none;
  outline: none;
  background-color: white;
  width: 100%;
  padding: 0.5rem 1rem;
  margin-bottom: 0.5rem;
`;

const Field = styled.textarea`
  width: 100%;
  border: none;
  outline: none;
  background-color: white;
  //box-sizing: border-box;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  margin-bottom: 1rem;
`;

const Button = styled.button`
  cursor: pointer;
  border: none;
  background-color: goldenrod;
  border-radius: 0.2rem;
  padding: 0.5rem 1rem;
  font-size: 1.5rem;
`;

const Contact = () => {
  return (
    <Container>
      <Wrapper>
        <Text>Want to get in touch?</Text>
        <Form>
          <FormContainer>
            <Label>Name</Label>
            <Input type='text' placeholder='Enter your name' required />
            <Label>Email</Label>
            <Input type='email' placeholder='Enter your email' required />
            <Label>Subject</Label>
            <Input type='text' placeholder='Enter your subject' />
            <Label>Message</Label>
            <Field>Enter your message</Field>
            <Button>Send</Button>
          </FormContainer>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Contact;
