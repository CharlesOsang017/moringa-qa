import React from 'react'
import './Header.styles.scss'
import { Link } from 'react-router-dom'
import { auth } from '../firebase/firebase.utils'

const Header = ({currentUser}) => {
    return (
        <header>
            <a href="#" className="logo">Moringa-QA</a>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Questions</a></li>
                <li><a href="#">Contact</a></li>
                <li><a href="#">Portfolio</a></li>
                <li><a href="#">Team</a></li>
                {
                currentUser ===null?
                <li><Link to="/login"> Sign In</Link></li>
                :
                <li ><a onClick={()=>auth.signOut()}> Sign Out</a></li>
            }
                
            </ul>
        </header>

    )
}

export default Header
