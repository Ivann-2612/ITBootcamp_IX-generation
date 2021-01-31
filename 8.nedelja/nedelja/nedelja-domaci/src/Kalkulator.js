import { useState } from 'react'

const Kalkulator = ( { setKorak, setRezultat, rezultat } ) => {

    
    const [operacije, setOperacije] = useState('');
    const [trenutni, setTrenutni] = useState(0);

    const kalkulacija = (operator) => {
        setKorak(prethodni => prethodni.concat(operator).concat(trenutni))
        if(+rezultat === 0) {
            setRezultat(trenutni)
        }
        else{
            switch (operator){
                case '+': setRezultat(prethodni => +prethodni + +trenutni); break;
                case '-': setRezultat(prethodni => +prethodni - +trenutni); break;
                case '*': setRezultat(prethodni => +prethodni * +trenutni); break;
                case '/': setRezultat(prethodni => +prethodni / +trenutni); break;
                default: break;
            }
        }
        setTrenutni(0);
    }

    return (
        <div>
            <input type="text" readOnly value={rezultat} />
            <input value={trenutni} type="number" onChange={(e) => setTrenutni(e.target.value)} />
            <button onClick={() => {setOperacije('+'); kalkulacija(operacije)}} >+</button>
            <button onClick={() => {setOperacije('-'); kalkulacija(operacije)}} >-</button>
            <button onClick={() => {setOperacije('*'); kalkulacija(operacije)}} >*</button>
            <button onClick={() => {setOperacije('/'); kalkulacija(operacije)}} >/</button>
            <button onClick={() => {setKorak(''); setRezultat(0);}} >Clear</button>
        </div>  
    )
}

export default Kalkulator