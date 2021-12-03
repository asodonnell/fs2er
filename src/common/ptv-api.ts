import ptvSig from 'ptv-api-signature';
import { Departure } from '../types/types';
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

export const getDepartures = async (route_id: string) => {
  let response = await fetch(
    `${BASE_URL}${ptvSig.pathWithSig(
      `/v3/departures/route_type/0/stop/1071/route/${route_id}`,
      [
        { name: "max_results", value: "4" },
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

export const getListOfRuns = async (runs: Departure[]) => {
  const newRuns = runs.map((run) => getRunInfo(run));

  return newRuns;
};

export const getRunDepartures = async (route_id: string) => {
  let response = await fetch(
    `${BASE_URL}${ptvSig.pathWithSig(
      `/v3/runs/route/${route_id}/route_type/0`,
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
