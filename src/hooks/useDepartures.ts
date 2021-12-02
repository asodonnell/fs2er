import { getListOfRuns } from "../common/ptv-api";

export const departureListChange = async (result: any) => {
  const results = await getListOfRuns(result);
  return runListChange(results);
};

const runListChange = async (promises: Promise<any>[]) => {
  try{
    const vals = await Promise.all(promises);
    return vals;
  } catch (error) {
    console.error(error);
    return null;
  }
};
