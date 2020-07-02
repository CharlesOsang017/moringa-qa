import React, { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import Main from './components/Main/Main.component';
import Questions from './components/Questions/Questions.component';
import Login from './components/Login/Login.component';
import Header from './components/Header/Header.component';
import { auth } from './components/firebase/firebase.utils';
// import './Question.styles.scss';
const  App =()=> {
    const [currentUser,setCurrentUser]= useState(null);
    
    let unSubsribeFromAuth = null;
    useEffect(()=>{
       unSubsribeFromAuth= auth.onAuthStateChanged(user =>{
            setCurrentUser(user);
        })
        return ()=>{
            unSubsribeFromAuth();
        }
    })

 



    return (
        <div>
            <Header currentUser={currentUser} />
            <Switch>
                <Route exact path='/' component={Main} />
                <Route exact path='/question' component={Questions} />
                <Route exact path='/login' component={Login} />

            </Switch>
        </div>
    )
}

export default App;
