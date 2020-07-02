import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Main from './components/Main/Main.component';
import Questions from './components/Questions/Questions.component';
// import './Question.styles.scss';
function App() {
    return (
    <Switch>
        <Route exact path='/' component={Main}/>
        <Route exact path='/question' component={Questions} />

    </Switch>
    )
}

export default App;
