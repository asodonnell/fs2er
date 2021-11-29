import React from 'react';
import styled from 'styled-components';

const ParentHeader = styled.div`
  width: 100vw;
`;
interface Props {
  clickHandler: (event: React.MouseEvent<HTMLButtonElement>) => void;
}


const Header = ({clickHandler} : Props) => (
  <ParentHeader>
    <h1>
      Flinders Street to East Richmond Station
    </h1>
    <button onClick={clickHandler}>
    <img /> 
      refresh
    </button>
  </ParentHeader>
);

export default Header;
