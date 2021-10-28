import React from "react";

import { Container } from "../components/Container";
import { H2 } from '../components/Text';

const Home = () => {
  return (
    <Container alignContent="center">
      <H2>Hello world</H2>
      <div>
      Browse Chrome as a guest
In Guest mode, you won't see or change any other Chrome profile's info. When you exit Guest mode, your browsing activity is deleted from the computer.

Guest mode is ideal for:

Letting others borrow your computer, or borrowing someone else’s computer.
Using a public computer, like one at a library or cafe.
If you want to browse privately on your own computer, use Incognito mode. You'll see your info and settings without saving any browsing history.
      </div>
    </Container>
  );
};

export default Home;
