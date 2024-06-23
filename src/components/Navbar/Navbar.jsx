import React , { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css"
import { useSelector , useDispatch } from 'react-redux'
import decode from 'jwt-decode'

import logo from "../../assets/logo.png"
import search from "../../assets/search-solid.svg"
import Avatar from "../../components/Avatar/Avatar"
import { setCurrnetUser } from "../../actions/currentUser";

const Navbar = () => {
var User = useSelector((state) => (state.currentUserReducer))
const dispatch = useDispatch()
const navigate = useNavigate()


const handleLogout = () => {
    dispatch({type : 'LOGOUT'})
navigate('/')
dispatch(setCurrnetUser(null))
}



useEffect( () => {
const token = User?.token

if(token){
    const decodedToken = decode(token)
   if(decodedToken.exp * 1000 < new Date().getTime()){
handleLogout()
   }
}

    dispatch(setCurrnetUser(JSON.parse(localStorage.getItem('profile'))))
}, [dispatch])




return (
    
       <nav className="main-nav">
            <div className="navbar">
                <Link to='/' className="nav-item nav-logo">

                    <img src={logo} alt="logo" />

                </Link>

                <Link to="/" className="nav-item nav-btn">About</Link>
                <Link to="/" className="nav-item nav-btn">Products</Link>
                <Link to="/" className="nav-item nav-btn">For Teams</Link>

                <form >
                    <input type="text" placeholder="Search..." />
                    <img src={search} alt="search" width="20" className="search-icon" />

                    {User === null ?
                        <Link to="/Auth" className="nav-item nav-links">Log In</Link>
                        : <>
                            <Avatar   backgroundColor="#009dff" px='10px'  py = '7px' borderRadius='50%'  ><Link to={`/Users/${User?.result?._id}`}style={{ color : 'white' , textDecoration:'none' }}  >{User.result.name.charAt(0).toUpperCase() }</Link></Avatar>

                            <button  className="nav-item nav-links" onClick={handleLogout}>Log Out</button>

                        </>
                    }
                </form>

            </div>
        </nav>
    )
}

export default Navbar