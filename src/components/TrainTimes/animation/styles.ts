import styled from "styled-components";

export const TestCircle = styled.div`
    background-color: #F58634;
    width: 5px;
    height: 5px;
    margin: 6px 5px;
    border-radius: 50%;
    animation: rotate-scale-up 1s cubic-bezier(0.600, -0.280, 0.735, 0.045) infinite both;
    
    @keyframes rotate-scale-up {
        0% {
          transform: scale(1) rotateZ(0);
          background-color: #FFCC29;
        }
        50% {
          transform: scale(2) rotateZ(180deg);
          background-color: #81B214;
        }
        100% {
          transform: scale(1) rotateZ(360deg);
          background-color: #206A5D;
        }
      }
`;
