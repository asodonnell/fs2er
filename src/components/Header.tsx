import React from "react";
import styled from "styled-components";
import { RiRefreshLine } from "react-icons/ri";

const ParentHeader = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const RefreshBtn = styled.button`
  height: 50px;
  width: 10vw;
  min-width: 10rem;
  background-color: white;
  border: 0.5px;
  border-radius: 25px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-size: 1em;
  cursor: pointer;
  &:active {
    box-shadow: 7px 6px 28px 1px rgba(0, 0, 0, 0.24);
    transform: translateY(2px);
  }
  display: flex;
  justify-content: center;
  align-items: center;

  & > *:first-child {
    margin-right: 4px;
  }
`;

interface Props {
  clickHandler: (event: React.MouseEvent<HTMLButtonElement>) => void;
  isLoading: boolean;
}

const Header = ({ clickHandler, isLoading }: Props) => {
  return (
    <ParentHeader>
      <h1>Flinders Street to East Richmond Station</h1>
      <RefreshBtn onClick={clickHandler} disabled={isLoading}>
        <RiRefreshLine /> Refresh
      </RefreshBtn>
    </ParentHeader>
  );
};

export default Header;
