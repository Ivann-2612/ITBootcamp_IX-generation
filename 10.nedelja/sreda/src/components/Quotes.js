import {useState,useEffect} from 'react'
import {getQuotes} from '../service'

const Quotes = () => {
    const [useQoutes,setUseQoutes] = useState([])

    useEffect(() => { 
   
        getQuotes().then(res =>
            setUseQoutes(res.data))

    },[])

    return (
        <div>
             <h1>Quotes</h1>
             {
                useQoutes.map(quote => {
                    return (
                        <div key={quote.id}>
                            <p>{quote.text}</p>
                            <p>{quote.author}</p><hr/>
                        </div>
                    )
                })
             }
        </div>
    )
}

export default Quotes

