import './App.css';
import Home from './pages/Home';
import { BrowserRouter as Router, Route } from "react-router-dom";
import ptvSig from 'ptv-api-signature';

const DEV_KEY = `48a79b7a-932a-407f-9bce-0e3cc155a6e6`;
const DEV_ID = `3001888`;
const BASE_URL = "https://timetableapi.ptv.vic.gov.au";


function App() {
  const getStopsBySearchTerm = (route_id: number)  =>  {
    return fetch(`${BASE_URL}${ptvSig.pathWithSig(
      `/v3/departures/route_type/0/stop/1071/route/${route_id}?max_results`,  
      [{ name:  'route_types', value:  '0'  }],
       DEV_ID, DEV_KEY)}`)
       .then(res  =>  res.json());
    }

  const getRunInfo = (run_id: string) => {
    return fetch(`${BASE_URL}${ptvSig.pathWithSig(
      `/v3/runs/${run_id}/route_type/0`,  
      [{ name:'route_types', value:'0'}],
       DEV_ID, DEV_KEY)}`)
       .then(res  =>  res.json());
  }
     
    getStopsBySearchTerm(2).then(data => {
      data.departures.forEach((element : any) => {
        getRunInfo(element.run_id).then(d => {
          console.log(d);
        });
      });
    })
     

  return (
    <div className="App">
           <Router>
            <Route path="/" component={Home} />
        </Router>
    </div>
  );
}

export default App;
