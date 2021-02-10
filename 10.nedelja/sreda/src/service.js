import axios from 'axios'


export const showLogged = () => 
    axios.get('http://localhost:3005/users')

export const isLogged = () => 
    axios.post('http://localhost:3005/users')


export const getQuotes = () => 
    axios.get('http://localhost:3005/quotes')

export const postQuotes = () => 
axios.put('http://localhost:3005/quotes')
