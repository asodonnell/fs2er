import React from "react";
import styled from "styled-components";
import { Run } from "../types/types";

const TrainTimesStyled = styled.div`
  font-size: 14px;
  background-color: #f6f6f6;
  border-radius: 10px;
  display: inline-block;
  padding: 5px 30px;
`;

interface Props {
  departureInfo: Run | null;
}

const TrainTimes = ({ departureInfo }: Props) => {

  return (
    <TrainTimesStyled>
      <div>
        Depature Time: {departureInfo?.scheduled_departure_utc} | Train Line:{" "}
        {departureInfo?.destination_name}
      </div>
      <div>
        Minutes until departure: {departureInfo?.estimated_departure_utc} | Platform: {departureInfo?.platform_number}
      </div>
    </TrainTimesStyled>
  );
};

export default TrainTimes;
