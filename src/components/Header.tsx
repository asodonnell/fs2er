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
    <img src="/Users/alex.odonnell/Code/fs2er/src/components/refresh.png" /> 
      refresh
    </button>
  </ParentHeader>
);

export default Header;
