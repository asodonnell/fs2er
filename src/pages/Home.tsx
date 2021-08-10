import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import TrainTimes from "../components/TrainTimes";
import styled from "styled-components";
import ptvSig from "ptv-api-signature";
import { Run } from "../types/types";
import { useState } from "react";

const DEV_KEY = `48a79b7a-932a-407f-9bce-0e3cc155a6e6`;
const DEV_ID = `3001888`;
const BASE_URL = "https://timetableapi.ptv.vic.gov.au";

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
  platform: "0",
};

const getRunInfo = (run_id: string) => {
  return fetch(
    `${BASE_URL}${ptvSig.pathWithSig(
      `/v3/runs/${run_id}/route_type/0`,
      [{ name: "route_types", value: "0" }],
      DEV_ID,
      DEV_KEY
    )}`
  ).then((res) => res.json());
};

const getRunFromRes = async (route_id: string) => {
  let response = await fetch(
    `${BASE_URL}${ptvSig.pathWithSig(
      `/v3/departures/route_type/0/stop/1071/route/${route_id}`,
      [
        { name: "route_types", value: "0" },
        { name: "max_results", value: "10" },
      ],
      DEV_ID,
      DEV_KEY
    )}`
  );

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  return await response.json();
};

const Home = () => {
  const [runs, setRuns] = useState([]);
  getRunFromRes("2")
    .then((res) => setRuns(res.departures));

  return (
    <Container>
      <Header />
      <div>
        <TrainTimes departureInfo={runs[0]} />
      </div>
      <Footer />
    </Container>
  );
};

export default Home;
