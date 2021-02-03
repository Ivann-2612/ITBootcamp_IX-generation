import axios from 'axios'

const BASE_URL_LAUNCHES_PAST = 'https://api.spacexdata.com/v4/launches/past'
const BASE_URL_SHIPS = 'https://api.spacexdata.com/v4/ships'

 export const getPastLaunches = () => {
      return axios.get(`${BASE_URL_LAUNCHES_PAST}`)}
 
 export const getAllShips = () => {
      return axios.get(`${BASE_URL_SHIPS}`)}
