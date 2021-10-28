import React, { useState } from 'react';

import { useMutation } from '@apollo/client';

import { ADD_CLIENT } from '../gql/mutations';

import { Container } from '../components/Container';
import { H2 } from '../components/Text';
import { Breadcrumb } from '../components/Breadcrumb';
import { Button } from '../components/Button';

function NewClient(props) {
  const [formState, setFormState] = useState({ 
        applicationID:'',
        name:'',
        email:'',    
        phone:'',
        agent:''
    });
  const [addNewClient] = useMutation(ADD_CLIENT);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const mutationResponse = await addNewClient({
      variables: {
        applicationID: formState.applicationID,
        name: formState.name,
        email: formState.remailole,
        phone: formState.phone,
        agent: formState.agent
      },

    });
    console.log(mutationResponse.data)
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    <>
      <Breadcrumb location={'/'} text={`← Go to Home`} />
      <Container>
        <H2>New Client</H2>
        <form onSubmit={handleFormSubmit}>
        <div className="flex-row space-between my-2">
            <label htmlFor="name">Name:</label>
            <input
              placeholder="Jo Smith"
              name="name"
              type="text"
              id="name"
              onChange={handleChange}
            />
          </div>
          <div className="flex-row space-between my-2">
            <label htmlFor="email">Email:</label>
            <input
              placeholder="youremail@test.com"
              name="email"
              type="email"
              id="email"
              onChange={handleChange}
            />
          </div>
          <div className="flex-row space-between my-2">
            <label htmlFor="applicationID">Application ID:</label>
            <input
              placeholder="Agent0007"
              name="applicationID"
              type="text"
              id="applicationID"
              onChange={handleChange}
            />
          </div>
          <div className="flex-row space-between my-2">
            <label htmlFor="phone">Phone</label>
            <input
              placeholder="040000007"
              name="Phone"
              type="Number"
              id="phone"
              onChange={handleChange}
            />
          </div>
          <div className="flex-row space-between my-2">
            <label htmlFor="agent">agent</label>
            <input
              placeholder="James Bond"
              name="agent"
              type="text"
              id="agent"
              onChange={handleChange}
            />
          </div>
          <div className="flex-row flex-end">
            <Button type="submit">Submit</Button>
          </div>
        </form>
      </Container>
    </>
  );
}

export default NewClient;
