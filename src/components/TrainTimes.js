import React from 'react';
import styled from 'styled-components';

const TrainTimesStyled = styled.div`
  font-size: 14px;
  background-color: #F6F6F6;
  border-radius: 10px;
  display: inline-block;
  padding: 5px 30px;
`;

const TrainTimes = ({departureInfo}) => {
    const {depTime, line, mins, platform} = departureInfo

    return <TrainTimesStyled>
      <div>
          Depature Time: {depTime} | Train Line: {line} 
      </div>
      <div>
          Minutes until departure: {mins} | Platform: {platform} 
      </div>
  </TrainTimesStyled>
};

export default TrainTimes;
