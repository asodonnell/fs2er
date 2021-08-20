import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { TrainTimes } from "../components/TrainTimes/TrainTimes";
import ptvSig from "ptv-api-signature";
import { Departure } from "../types/types";
import { useState, useEffect } from "react";
import { Container } from "./styles";
const DEV_KEY = `48a79b7a-932a-407f-9bce-0e3cc155a6e6`;
const DEV_ID = `3001888`;
const BASE_URL = "https://timetableapi.ptv.vic.gov.au";

const getRunInfo = async (departure: Departure) => {
  let response = await fetch(
    `${BASE_URL}${ptvSig.pathWithSig(
      `/v3/runs/${departure.run_ref}/route_type/0`,
      [{ name: "route_types", value: "0" }],
      DEV_ID,
      DEV_KEY
    )}`
  );

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  const data = await response.json();

  return data;
};

const getDepartures = async (route_id: string) => {
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

  const data = await response.json();

  return data;
};

const getListOfRuns = async (runs: Departure[]) => {
  const newRuns = runs.map((run) => getRunInfo(run));

  return newRuns;
};

const Home = () => {
  const [error, setError] = useState<any>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [departures, setDepartures] = useState<Departure[]>([]);
  const [runs, setRuns] = useState<any[]>([]);
  useEffect(() => {
    getDepartures("2").then(
      (result) => {
        setDepartures(result.departures);
        console.log(result.departures);
        getListOfRuns(result.departures).then((promises) => {
          const results = Promise.all(promises);
          results.then((vals) => {
            setIsLoaded(true);
            setRuns(vals);
          });
        });
      },
      (error) => {
        setIsLoaded(true);
        setError(error);
      }
    );
  }, []);

  if (error) {
    return <div>Error: {error?.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <>
        <Container>
          <Header />
          <div>
            {departures.map((val, i) => {
              // if (runs[i]?.run?.express_stop_count === 0) {
               return(<TrainTimes
                  key={val.run_ref}
                  platform_number={val?.platform_number}
                  estimated_departure_utc={val?.estimated_departure_utc}
                  scheduled_departure_utc={val?.scheduled_departure_utc}
                  trainLine={runs[i]?.run?.destination_name}
                />);
              // }
            })}
          </div>
          <Footer />
        </Container>
      </>
    );
  }
};

export default Home;
