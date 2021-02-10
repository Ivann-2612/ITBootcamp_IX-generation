import { Redirect } from "react-router"
const Home = ({ loggedIn }) => {
    return (
        <div className='home'>
            {loggedIn ? <Redirect to='/quotes' /> : <Redirect to='/login' />}
        </div>
    )
}
export default Home