import React from "react";
import { LiveFeed } from "./animation/LiveFeed";
import {
  Row,
  TrainTimesStyled,
  EstimatedTime,
  GrowWrapper,
  NoActiveTime,
} from "./styles";
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

  const diffInMins = ((currTime.getTime() - estimatedTimeAsDate.getTime()) / 1000) / 60;

  const timeInMins = Math.abs(Math.round(diffInMins));
  

  return timeInMins;
};

const displayEstimatedTime = (timeInMins: number): string =>  {
  if (timeInMins > 60){
    const timeInHours = timeInMins / 60;
    const rounded = Math.abs(Math.round(timeInHours));
    return `${rounded} hours`; 
  } else {
    return `${timeInMins} mins`; 
  }
}

const platformColour = (platform: string): string => {
  var colour: string;
  switch(platform) {
    case "2":
      colour = '#BD1616'
      break;
    case "3":
      colour = '#ED711F'
      break;
    case "4":
      colour = '#2D8659'
      break;
    case "5":
      colour = '#8154AB'
      break;
    case "6":
      colour = '#2BC5CA'
      break;
    case "7":
      colour = '#FCCA36'
      break;
    case "8":
      colour = '#0078BD'
      break;
    case "9":
      colour = '#F2636F'
      break;
    default:
      colour = '#8B4513'
  }
  return colour;
}

export const TrainTimes = ({
  scheduled_departure_utc,
  trainLine = "",
  estimated_departure_utc,
  platform_number,
}: Props) => {
  return (
    <GrowWrapper>
      <TrainTimesStyled platformColour={platformColour(platform_number)}>
        <Row>
          <div>{trainLine} Line</div>
          <div>{convertDate(scheduled_departure_utc)}</div>
        </Row>
        <Row>
          <div>Platform {platform_number}</div>
          <div>
            <EstimatedTime>
              {estimated_departure_utc ? (
                <>
                  <LiveFeed />
                  {displayEstimatedTime(getTimeDiff(estimated_departure_utc))}
                </>
              ) : (
                <>
                  <NoActiveTime>
                    {displayEstimatedTime(getTimeDiff(scheduled_departure_utc))}
                  </NoActiveTime>
                </>
              )}
            </EstimatedTime>
          </div>
        </Row>
      </TrainTimesStyled>
    </GrowWrapper>
  );
};
