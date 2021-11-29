# flinders-to-east-richmond

> ❌ We say no more to apps such as PTV and Google Maps blatantly lying to the faces of REA Employees. ❌ <br><br> 'Flinders to East Richmond' will develop a state-of-the-art algorithm technology to display pinpoint accurate times of trains departing from Flinders Street Station that are undoubtedly stopping at East Richmond Station. <br><br> This data will become available to you in the form of a leading edge react application utilising the most efficient software engineering design paradigms and philosphies currently known to man.<br><br> Get ready to finally say goodbye to the gruelling and laborious trek from Richmond Station to REA Headquarters.


## Links
PTV API Documentation: http://timetableapi.ptv.vic.gov.au/swagger/ui/index

## Glossary

- Peak times: Before 9am
- Non-peak times: After 9am

- `stop_id`: Station
- `route_id`: Train line
- `platform_number`: Platform
- `run-id`: unique id for each train
- `scheduled_departure_utc`: scheduled departure times (UTC format)
- `estimated_departure_utc`: estimated departure times (UTC format)



## Key Values
### APIs
-  `Departures` API: "/v3/departures/route_type/0/stop/1071/route/$route_id?max_results=5"
-  `Runs` API: "/v3/departures/route_type/0/stop/1071/route/$route_id?max_results=5"


### Keys
- dev id: `3001885`
- API key: `9DD849CB6135AC9AECF6161E87DC8E5D9291A63A`

### Train Line IDs
- Belgrave: `route_id: 2`
- Glen Waverley: `route_id: 7`
- Alamein: `route_id: 1`
- Lilydale: `route_id: 9`

### Stop IDs
- Flinders Street Station: `stop_id: 1070`
- East Richmond Station: `stop_id: 1059`

## What is wrong with the PTV API currently?
- When journey planning from Flinders to East Richmond *before peak times*:
  - Shows Lilydale trains. None of which stop at East Richmond
  - Doesn't show Blackburn (stopping all station) trains. All of which stop at East Richmond.
- When journey planning from Flinders to East Richmond *after peak times*:
  - Only Glen Waverley and Blackburn trains stop at East Richmond
  - All other trains pass.
  
## Our solution
- Call the API for East Richmond departures heading towards Belgrave/Glen Waverley/Alamein/Lilydale. These are all city outbound trains.
- Retrieve the `run-id` for these trains.
- Map these `run-id`s back to departing trains from Flinders Street Station.
- ✨ACCURATE TRAIN TIMES✨

## Code Logic
1. Query `Departures` API for the next 5 trains departing from Flinders Street Station to Belgrave, Lilydale, Alamein and Glen Waverley.
2. Retrieve `run_id` for each departure 
3. For each `run_id`, query the `Runs` API
4. Capture all runs with `express_stop_count` of 0* </br>
*note: only non-express trains stop at East Richmond Station

## Next Steps
- Arrival time to East Richmond
- 
- Monetise
- Upload to Play Store
- iOS App
- Web App