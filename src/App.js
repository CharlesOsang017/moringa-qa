import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Main from './components/Main/Main.component';
import Questions from './components/Questions/Questions.component';
import Login from './components/Login/Login.component';
import Header from './components/Header/Header.component';
// import './Question.styles.scss';
function App() {
    return (
        <div>
            <Header />
            <Switch>
                <Route exact path='/' component={Main} />
                <Route exact path='/question' component={Questions} />
                <Route exact path='/login' component={Login} />

            </Switch>
        </div>
    )
}

export default App;
