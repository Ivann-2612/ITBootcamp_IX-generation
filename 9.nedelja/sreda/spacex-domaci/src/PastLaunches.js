import {getPastLaunches} from './service'
import { useEffect, useState} from 'react'


const PastLaunches = () => {
    const [launches,setLaunches] = useState([])
    useEffect(() => {
        getPastLaunches().then(res => {
          console.log(res.data[0])
          setLaunches(res.data)
        })
      },[])
    return (
        <>
            {
         launches.map(launch  => 
            <div key={launch.id}>
                <p>{launch.static_fire_date_utc}</p>
                <img src={launch.links.patch.small} alt={launch.name}/>
            </div>)
            }
        </>
    )
}
export default PastLaunches
