import React from "react";
import { LiveFeed } from "./animation/LiveFeed";
import { Row, TrainTimesStyled, EstimatedTime, GrowWrapper } from "./styles";
interface Props {
  scheduled_departure_utc: string;
  trainLine: string;
  estimated_departure_utc: string;
  platform_number: string;
}

const convertDate = (departure_time: string) => {
  const depatureTimeAsDate = new Date(departure_time);
  const h = depatureTimeAsDate.getHours();
  const m = depatureTimeAsDate.getMinutes();
  if (h < 10 && m < 10) {
    return `0${h}:0${m}`;
  } else if (m < 10) {
    return `${h}:0${m}`;
  } else if (h < 10) {
    return `0${h}:${m}`;
  }
  return `${h}:${m}`;
};

const getTimeDiff = (estimated_time: string) => {
  const estimatedTimeAsDate = new Date(estimated_time);
  const currTime = new Date(Date.now());

  var diff = (currTime.getTime() - estimatedTimeAsDate.getTime()) / 1000;
  diff /= 60;
  return Math.abs(Math.round(diff));
};

export const TrainTimes = ({
  scheduled_departure_utc,
  trainLine = "",
  estimated_departure_utc,
  platform_number,
}: Props) => {
  return (
    <GrowWrapper>
      <TrainTimesStyled>
        <Row>
          <div>{trainLine} Line</div>
          <div>{convertDate(scheduled_departure_utc)}</div>
        </Row>
        <Row>
          <div>Platform {platform_number}</div>
          <div>
            <EstimatedTime>
              {estimated_departure_utc && (
                <>
                  <LiveFeed />
                  {getTimeDiff(estimated_departure_utc)} mins
                </>
              ) 
              }
            </EstimatedTime>
          </div>
        </Row>
      </TrainTimesStyled>
    </GrowWrapper>
  );
};
