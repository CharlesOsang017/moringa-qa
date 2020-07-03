import React, { useState, useEffect } from 'react'
import './Header.styles.scss'
import { Link } from 'react-router-dom'
import { auth } from '../firebase/firebase.utils'

const Header = ({currentUser}) => {
    // const [stickHeader, setstickHeader] = useState(null)
    // useEffect(() => {
    //     window.addEventListener('scroll',()=>{
    //         window.scrollY > 0 && setstickHeader(window.scrollY)
    //     })
    //     return () => {
    //         window.removeEventListener('scroll',()=>setstickHeader(null))
    //     }
    // })
    return (
        <header className={`${currentUser && 'has-user '}`}>
            <a href="#" className="logo">Moringa-QA</a>
            <ul>
                <li><Link to='/moring-qa'>Home</Link></li>
                <li><Link to="/moring-qa/question">Questions</Link></li>
                {currentUser && <li><Link to="/moring-qa/postQuestion">Post A Question</Link></li>}
                {
                currentUser?
                <li ><a onClick={()=>auth.signOut()}> Sign Out</a></li>
                :
                <li><Link to="/moring-qa/login"> Sign In</Link></li>

                }
                {
                    currentUser &&
                <div><p>{currentUser.displayName}</p></div>
                }
                
            </ul>
        </header>

    )
}

export default Header
