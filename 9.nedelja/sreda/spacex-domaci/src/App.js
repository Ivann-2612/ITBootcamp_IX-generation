import {useState,useEffect} from 'react'
import './index.css'
import PastLaunches from './PastLaunches'
import Ships from './Ships'
import Select from './Select'



function App() {
  const [launches, setLaunches] = useState([]);
  const [year, setYear] = useState([]);
  

  return (
      <div className='app1'>
      <h1>Space X <span className='span'>🚀</span> </h1><br/><br/>
      <div className='app'>
      <Select launches={launches} setYear={setYear} />
     <PastLaunches /> 
     <Ships />
      </div>
    </div>
  )
}
export default App;
