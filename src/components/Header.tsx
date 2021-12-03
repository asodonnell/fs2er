import React from "react";
import styled, { keyframes } from "styled-components";
import { RiRefreshLine } from "react-icons/ri";

const ParentHeader = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  text-align: left;
  margin: 0 10px 0 10px;
`;

const StyledH1Container = styled.div`
  width: 100%;
`;

const StyledP = styled.p`
  max-width: 500px;
`;

const RefreshBtn = styled.button`
  height: 50px;
  width: 10vw;
  min-width: 10rem;
  margin-top: 10px;
  margin-bottom: 20px;
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

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const Rotate = styled.div`
  display: inline-block;
  animation: ${rotate} 2s linear infinite;
  font-size: 1.2rem;
`;

interface Props {
  clickHandler: (event: React.MouseEvent<HTMLButtonElement>) => void;
  isLoading: boolean;
}

const Header = ({ clickHandler, isLoading }: Props) => {
  return (
    <ParentHeader>
      <StyledH1Container>
        <h1>
          Flinders Street to <br /> East Richmond
        </h1>
        <StyledP>
          Trains departing from Flinders Street Station, that are{" "}
          <em>definitely</em> stopping at East Richmond Station.
        </StyledP>
      </StyledH1Container>

      <RefreshBtn onClick={clickHandler} disabled={isLoading}>
        {isLoading === true ? (
          <>
            <Rotate>
              <RiRefreshLine />
            </Rotate>
            Loading
          </>
        ) : (
          <>
            <RiRefreshLine />
            Refresh
          </>
        )}
      </RefreshBtn>
    </ParentHeader>
  );
};

export default Header;
