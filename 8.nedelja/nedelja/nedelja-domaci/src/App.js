import React, {useState} from 'react'
import './App.css';
import Kalkulator from './Kalkulator'

function App() {

  const [rezultat,setRezultat]= useState(0);
  const [korak,setKorak]= useState(0);
 
  return (
    <div className="App">
       <Kalkulator setKorak={setKorak} setRezultat={setRezultat} rezultat={rezultat} />
       <p>Prikaz rezultata: {korak}</p>
    </div>
  );
}

export default App;
