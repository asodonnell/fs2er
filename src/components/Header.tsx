import React from "react";
import styled from "styled-components";
import { RiRefreshLine } from "react-icons/ri";

const ParentHeader = styled.div`
  width: 100vw;
`;
interface Props {
  clickHandler: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const RefreshBtn = styled.button`
  height: 50px;
  width: 10vw;
  min-width: 10rem;
  background-color: white;
  border: 0.5px;
  border-radius: 25px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-size: medium;
  cursor: pointer;
  &:active {
    box-shadow: 7px 6px 28px 1px rgba(0, 0, 0, 0.24);
    transform: translateY(2px);
  }
`;

const Header = ({ clickHandler }: Props) => (
  <ParentHeader>
    <h1>Flinders Street to East Richmond Station</h1>
    <RefreshBtn onClick={clickHandler}>
      <RiRefreshLine /> Refresh
    </RefreshBtn>
  </ParentHeader>
);

export default Header;
