import React from "react";
import {TrainTimesStyled } from './styles';
interface Props {
  scheduled_departure_utc: Date;
  trainLine: string;
  estimated_departure_utc: Date;
  platform_number: string;
}

export const TrainTimes = ({
  scheduled_departure_utc,
  trainLine = "",
  estimated_departure_utc,
  platform_number
}: Props) => {
  return (
    <TrainTimesStyled>
      <div>
        Depature Time: {scheduled_departure_utc} | Train Line:{trainLine}
      </div>
      <div>
        Minutes until departure: {estimated_departure_utc} | Platform:{" "}
        {platform_number}
      </div>
    </TrainTimesStyled>
  );
};