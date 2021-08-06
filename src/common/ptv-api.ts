import ptvSig from 'ptv-api-signature';

const DEV_KEY = `48a79b7a-932a-407f-9bce-0e3cc155a6e6`;
const DEV_ID = `3001888`;
const BASE_URL = "https://timetableapi.ptv.vic.gov.au";

export const PTVAPI = {

    async getStopByRouteId(route_id: number){
        return fetch(`${BASE_URL}${ptvSig.pathWithSig(
            `/v3/departures/route_type/0/stop/1071/route/${route_id}`,  
            [{ name:  'route_types', value:  '0'  }, { name:  'max_results', value:  '10'  }],
             DEV_ID, DEV_KEY)}`).then((res) => {
                 console.log(res)
            return res
        })
    }
}