
import {postQuotes} from '../service'


const CreateQuote = () => {

    return (
        <div>
             <h1>CreateQuote</h1>
             <form onSubmit={(e) => {
                  e.prevent.default()
                   
             } 
                    
                 }>
                 <label>
                 <input type='text' placeholder='create qoute' />
                 <br/> <br/>
                 <input type='text' placeholder='author' /><br/><br/>
                 <input type='submit' value='Submit quote' />
                 </label>
             </form>
            
            
        </div>
    )
}

export default CreateQuote
