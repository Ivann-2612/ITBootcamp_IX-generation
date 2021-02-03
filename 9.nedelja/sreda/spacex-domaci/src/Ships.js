import {getAllShips} from './service'
import { useEffect, useState} from 'react'


const Ships = () => { 
  const [ships,setShips] = useState([])

  useEffect(() => {
     getAllShips().then(res => {
       console.log(res.data[0])
       setShips(res.data)
     })
   },[])
    const placeholderImg = 'https://via.placeholder.com/150'
    return (
        <div>
            {
                ships.map( ship => 
                    <div className='ships'>
                        <img className='imgAll' src={ship.image ? ship.image : placeholderImg} alt={''}/>
                        <hr/>
                        <p className='ship-name'>{ship.name}</p>
                        <p className='year'>{ship.year_built ? ship.year_built : 'Unknown year'}</p>
                    </div>
                )
            }
        </div>
    )
}

export default Ships
