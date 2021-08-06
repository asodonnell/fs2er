import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import TrainTimes from '../components/TrainTimes';
import styled from 'styled-components';


const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  text-align: center;
  justify-content: space-around;
`;

const trainDummyData = {
  depTime: "00:00", 
  line: "Blackburn", 
  mins: "now", 
  platform: "0"
} 


const Home = () => (
    <Container>
        <Header />
        <div>
        <TrainTimes departureInfo={trainDummyData} />
        </div>
        <Footer />
    </Container>
  );
  
  export default Home;
  