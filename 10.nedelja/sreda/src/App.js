import {useState,useEffect} from 'react'
import {isLogged} from './service'
import './index.css'
import CreateQuote from "./components/CreateQuote"
import Home from "./components/Home"
import Login from "./components/Login"
import Quotes from "./components/Quotes"
import Register from "./components/Register"
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

const App = () => {
    const [user,setUser] = useState({username:'pera',email:'jbnljblwvjb'})
    return (
        <Router> 
            <nav>
                <Link style={{padding:5}} to="/">Home</Link>
                <Link style={{padding:5}} to="/quotes">Quotes</Link>
                <Link style={{padding:5}} to="/createquote">CreateQuote</Link>
                {
                  user ? <span>{user.username}</span> :
                  <>
                    <Link style={{padding:5}} to="/login">Login</Link>
                    <Link style={{padding:5}} to="/register">Register</Link>
                  </>
                }
              
            </nav>
            <Switch>
                <Route path="/login">
                    <Login setUser={setUser} />
                </Route>
                <Route path="/register">
                    <Register />
                </Route>
                <Route path="/quotes">
                    <Quotes />
                </Route>
                <Route path="/createquote">
                    <CreateQuote />
                </Route>
                <Route path="/">
                    <Home />
                </Route>
            </Switch>
        </Router>
    )
}
export default App