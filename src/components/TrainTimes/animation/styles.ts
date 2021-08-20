import styled from "styled-components";

export const LiveCircle = styled.div`
    background-color: #FFFFFF;
    width: 5px;
    height: 5px;
    margin: 7px;
    border-radius: 50%;
    animation: rotate-scale-up 1s cubic-bezier(0.600, -0.280, 0.735, 0.045) infinite both;
    
    @keyframes rotate-scale-up {
        0% {
          transform: scale(1);
          background-color: #FFFFFF;
        }
        50% {
          transform: scale(2);
          background-color: #81B214;
        }
        100% {
          transform: scale(1);
          background-color: #81B214;
        }
      }
`;
