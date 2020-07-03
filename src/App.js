import React, { useState, useEffect } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Main from './components/Main/Main.component';
import Questions from './components/Questions/Questions.component';
import Login from './components/Login/Login.component';
import Header from './components/Header/Header.component';
import { auth } from './components/firebase/firebase.utils';
import PostQuestion from './components/PostQuestion/PostQuestion.component';

const App = () => {
    const [currentUser, setCurrentUser] = useState(null);

    let unSubsribeFromAuth = null;
    useEffect(() => {
        unSubsribeFromAuth = auth.onAuthStateChanged(user => {
            setCurrentUser(user);
        })
        return () => {
            unSubsribeFromAuth();
        }
    })



    return (
        <div>
            <Header currentUser={currentUser} />
            <Switch>
                <Route exact path='/moring-qa' component={Main} />
                <Route exact path='/moring-qa/question' component={Questions} />
                <Route exact render={() => (
                    !currentUser ? (<Redirect push path="/moring-qa/login" />)
                        : (<Route component={PostQuestion} />)
                )}  path='/moring-qa/postQuestion'/>
                <Route exact path="/moring-qa/login" render={() => (
                    currentUser ? (<Redirect push path="/" />)
                        : (<Route component={Login} />)
                )} />
            </Switch>
        </div>
    )
}

export default App;
