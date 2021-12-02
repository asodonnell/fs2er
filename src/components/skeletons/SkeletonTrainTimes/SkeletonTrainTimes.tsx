import {
  EmptyTrainTimesStyled,
  EmptyGrowWrapper,
  EmptyRow,
  EmptyLine,
  EmptyPlatform,
  EmptyTime,
  EmptyEstimated
} from "./SkeletonTrainTimes.style";


export const SkeletonTrainTimes = () => {
  return (
    <>
      <EmptyGrowWrapper>
        <EmptyTrainTimesStyled>
          <EmptyRow>
            <EmptyLine />
            <EmptyTime />
          </EmptyRow>
          <EmptyRow>
            <EmptyPlatform />
            <EmptyEstimated />
          </EmptyRow>
        </EmptyTrainTimesStyled>
      </EmptyGrowWrapper>
    </>
  );
};