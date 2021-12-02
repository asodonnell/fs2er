import styled from 'styled-components';

const EmptyTextColor = '#F6F5F7';

export const EmptyTrainTimesStyled = styled.div`
  background-color: #ffffff;
  border-left-style: solid;
  border-color: #E6E3E8;
  border-width: 0.3rem;
  padding: 5px;
`;

export const EmptyGrowWrapper = styled.div`
transition: all 0.2s ease-in-out;

margin: 10px;
&:hover {
  transform: scale(1.02);
  box-shadow: 2px -2px 10px gray;
}
`;

export const EmptyRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 8px;
`;

export const EmptyLine = styled.div`
  height: 1.2rem;
  width: 10rem;
  background-image: radial-gradient(
      64px circle at 50% 84px,
      ${EmptyTextColor},
      transparent 0
    ),
    linear-gradient(
      90deg,
      rgba(255, 255, 255, 0),
      rgba(255, 255, 255, 0.25) 25%,
      rgba(255, 255, 255, 0) 100%
    ),
    linear-gradient(${EmptyTextColor} 40px, transparent 0),
    linear-gradient(${EmptyTextColor} 60px, transparent 0),
    linear-gradient(${EmptyTextColor} 40px, transparent 0),
    linear-gradient(${EmptyTextColor} 32px, transparent 0);
  background-repeat: repeat-y;
  background-size: 100% 344px, 90px 200px, 100% 308px, calc(100% - 32px) 308px, calc(100% - 32px) 308px, calc(100% - 32px) 308px;
  background-position: 0 0, /* circle */ 0 0, /* highlight */ 0px 0, 16px 124px, 16px 204px, 16px 260px;
  animation: shineEmpty 1s infinite alternate-reverse;
  @keyframes shineEmpty {
    to {
      background-position: 0 0, 100% 0, /* move highlight to right */ 0 0, 16px 124px, 16px 204px, 16px 260px;
    }
  }
`;

export const EmptyPlatform = styled.div`
  background-color: ${EmptyTextColor};
  height: 1.1rem;
  width: 6rem;
  background-image: radial-gradient(
      64px circle at 50% 84px,
      ${EmptyTextColor},
      transparent 0
    ),
    linear-gradient(
      90deg,
      rgba(255, 255, 255, 0),
      rgba(255, 255, 255, 0.25) 25%,
      rgba(255, 255, 255, 0) 100%
    ),
    linear-gradient(${EmptyTextColor} 40px, transparent 0),
    linear-gradient(${EmptyTextColor} 60px, transparent 0),
    linear-gradient(${EmptyTextColor} 40px, transparent 0),
    linear-gradient(${EmptyTextColor} 32px, transparent 0);
  background-repeat: repeat-y;
  background-size: 100% 344px, 90px 200px, 100% 308px, calc(100% - 32px) 308px, calc(100% - 32px) 308px, calc(100% - 32px) 308px;
  background-position: 0 0, /* circle */ 0 0, /* highlight */ 0px 0, 16px 124px, 16px 204px, 16px 260px;
  animation: shineEmpty 1s infinite alternate-reverse;
  @keyframes shineEmpty {
    to {
      background-position: 0 0, 100% 0, /* move highlight to right */ 0 0, 16px 124px, 16px 204px, 16px 260px;
    }
  }
`;
export const EmptyTime = styled.div`
  background-color: ${EmptyTextColor};
  height: 1.2rem;
  width: 3rem;
  background-image: radial-gradient(
      64px circle at 50% 84px,
      ${EmptyTextColor},
      transparent 0
    ),
    linear-gradient(
      90deg,
      rgba(255, 255, 255, 0),
      rgba(255, 255, 255, 0.25) 25%,
      rgba(255, 255, 255, 0) 100%
    ),
    linear-gradient(${EmptyTextColor} 40px, transparent 0),
    linear-gradient(${EmptyTextColor} 60px, transparent 0),
    linear-gradient(${EmptyTextColor} 40px, transparent 0),
    linear-gradient(${EmptyTextColor} 32px, transparent 0);
  background-repeat: repeat-y;
  background-size: 100% 344px, 90px 200px, 100% 308px, calc(100% - 32px) 308px, calc(100% - 32px) 308px, calc(100% - 32px) 308px;
  background-position: 0 0, /* circle */ 0 0, /* highlight */ 0px 0, 16px 124px, 16px 204px, 16px 260px;
  animation: shineEmpty 1s infinite alternate-reverse;
  @keyframes shineEmpty {
    to {
      background-position: 0 0, 100% 0, /* move highlight to right */ 0 0, 16px 124px, 16px 204px, 16px 260px;
    }
  }
`;

export const EmptyEstimated = styled.div`
  background-color: ${EmptyTextColor};
  height: 1.1rem;
  width: 5rem;
  background-image: radial-gradient(
      64px circle at 50% 84px,
      ${EmptyTextColor},
      transparent 0
    ),
    linear-gradient(
      90deg,
      rgba(255, 255, 255, 0),
      rgba(255, 255, 255, 0.25) 25%,
      rgba(255, 255, 255, 0) 100%
    ),
    linear-gradient(${EmptyTextColor} 40px, transparent 0),
    linear-gradient(${EmptyTextColor} 60px, transparent 0),
    linear-gradient(${EmptyTextColor} 40px, transparent 0),
    linear-gradient(${EmptyTextColor} 32px, transparent 0);
  background-repeat: repeat-y;
  background-size: 100% 344px, 90px 200px, 100% 308px, calc(100% - 32px) 308px, calc(100% - 32px) 308px, calc(100% - 32px) 308px;
  background-position: 0 0, /* circle */ 0 0, /* highlight */ 0px 0, 16px 124px, 16px 204px, 16px 260px;
  animation: shineEmpty 1s infinite alternate-reverse;
  @keyframes shineEmpty {
    to {
      background-position: 0 0, 100% 0, /* move highlight to right */ 0 0, 16px 124px, 16px 204px, 16px 260px;
    }
  }
`;