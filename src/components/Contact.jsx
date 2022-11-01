import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  border: 1px solid gray;
  border-radius: 1rem;
`;

const Wrapper = styled.div`
  padding: 1rem 1rem;
  display: flex;
  height: 40vh;
`;

const Text = styled.h1`
  flex: 1;
  justify-content: center;
`;

const Form = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 1.5rem;
`;

const Label = styled.h4`
  padding: 0.5rem 0;
`;

const Input = styled.input``;

const Field = styled.textarea``;

const Contact = () => {
  return (
    <Container>
      <Wrapper>
        <Text>Want to get in touch?</Text>
        <Form>
          <Label>Name</Label>
          <Input type='text' placeholder='Enter your name' />
          <Label>Email</Label>
          <Input type='email' placeholder='Enter your email' />
          <Label>Subject</Label>
          <Input type='text' placeholder='Enter your subject' />
          <Label>Message</Label>
          <Field>Enter your message</Field>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Contact;
