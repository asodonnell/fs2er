import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useState, useEffect } from "react";
import { TrainTimes } from "../components/TrainTimes/TrainTimes";
import { Container } from "./styles";
import { departureListChange } from "../hooks/useDepartures";
import { getDepartures } from "../common/ptv-api";
import { RouteInfo } from "../types/types";
import { SkeletonTrainTimes } from "../components/skeletons/SkeletonTrainTimes/SkeletonTrainTimes";

const Home = () => {
  const [departures, setDepartures] = useState<any[]>([]);
  const [runs, setRuns] = useState<any[]>([]);
  const [refresh, setRefresh] = useState<boolean>(false);
  const [autoRefresh, setAutoRefresh] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);

  const getRouteInfo = async () => {
    setLoading(true);
    console.log("fetching...");
    Promise.all([
      getDepartures("1"),
      getDepartures("2"),
      getDepartures("7"),
      getDepartures("9"),
    ]).then((values: RouteInfo[]) => {
      const departures = values.flatMap((vals) => vals.departures);

      const sortedTimeDepartures = departures.sort((a, b) => {
        return (
          Date.parse(a.scheduled_departure_utc) -
          Date.parse(b.scheduled_departure_utc)
        );
      });

      setDepartures(sortedTimeDepartures);
      departureListChange(sortedTimeDepartures).then((r) => {
        setRuns(r);
        setLoading(false);
        console.log("fetched");
      });
    });
  };

  useEffect(() => {
    setDepartures([]);
    setRuns([]);
    getRouteInfo();
  }, [refresh]);

  useEffect(() => {
    if(autoRefresh){
      getRouteInfo();
    }
  }, [autoRefresh]);

  const refreshFeed = () => {
    setRefresh(!refresh);
  };

  const refreshItems = async () => {
    setTimeout(() => {
      setAutoRefresh(!autoRefresh);
    }, 15_000);
  };

  refreshItems();

  return (
    <>
      <Container>
        <Header clickHandler={refreshFeed} />
        <div>
          {loading ? (
            <>
              {Array(10).fill(<SkeletonTrainTimes />)}
            </>
          ) : (
            <>
              {departures.map((val, i) => {
                if (runs[i]?.run?.express_stop_count === 0) {
                return (
                  <TrainTimes
                    key={val.run_ref}
                    platform_number={val?.platform_number}
                    estimated_departure_utc={val?.estimated_departure_utc}
                    scheduled_departure_utc={val?.scheduled_departure_utc}
                    trainLine={runs[i]?.run?.destination_name}
                  />

                );
                } else {
                  return null;
                }
              })}
            </>
          )}
        </div>
        <Footer />
      </Container>
    </>
  );
};

export default Home;
