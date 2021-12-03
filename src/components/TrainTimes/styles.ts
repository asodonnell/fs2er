import styled from "styled-components";

type StyledComponentProps = {
  platformColour: string;
};

export const TrainTimesStyled = styled.div<StyledComponentProps>`
  background-color: #ffffff;
  border-left-style: solid;
  border-color: ${(props: { platformColour: any; }) => props.platformColour};
  border-width: 0.3rem;
  padding: 5px;
  -webkit-animation: scale-up-ver-top 0.7s cubic-bezier(0.39, 0.575, 0.565, 1)
    both;
  animation: scale-up-ver-top 0.7s cubic-bezier(0.39, 0.575, 0.565, 1) both;
  @-webkit-keyframes scale-up-ver-top {
    0% {
      -webkit-transform: scaleY(0.4);
      transform: scaleY(0.4);
      -webkit-transform-origin: 100% 0%;
      transform-origin: 100% 0%;
    }
    100% {
      -webkit-transform: scaleY(1);
      transform: scaleY(1);
      -webkit-transform-origin: 100% 0%;
      transform-origin: 100% 0%;
    }
  }
  @keyframes scale-up-ver-top {
    0% {
      -webkit-transform: scaleY(0.4);
      transform: scaleY(0.4);
      -webkit-transform-origin: 100% 0%;
      transform-origin: 100% 0%;
    }
    100% {
      -webkit-transform: scaleY(1);
      transform: scaleY(1);
      -webkit-transform-origin: 100% 0%;
      transform-origin: 100% 0%;
    }
  }
`;

export const PlatformPill = styled.div<StyledComponentProps>`
  border: 2px solid ${(props: { platformColour: any; }) => props.platformColour};
  border-radius: 1rem;
  padding: 0.2rem 0.6rem 0.25rem 0.6rem;
  position: relative;
  right: 0.4rem;
  font-size: 0.7rem;
  font-weight: bold;
  letter-spacing: 0.05rem;
  color: #3e3e3e;
`;

export const GrowWrapper = styled.div`
transition: all 0.2s ease-in-out;

margin: 10px;
&:hover {
  transform: scale(1.02);
  box-shadow: 2px -2px 10px gray;
}
`;

export const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 8px;
  //border: 1px solid blue;
`;

export const EstimatedTime = styled.div`
  display: flex;
  justify-content: space-between;
  font-weight: 500;
  color: #1a1a1a;
`;
 
export const NoActiveTime = styled.div`
 color: #a9a9a9;
`;