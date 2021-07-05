import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import styled from 'styled-components';


const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  text-align: center;
  justify-content: space-around;
`;

const Home = () => (
    <Container>
        <Header />
        <div>hello</div>
        <Footer />
    </Container>
  );
  
  export default Home;
  