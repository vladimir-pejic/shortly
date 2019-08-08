import React from 'react';
import { Link, Route, Switch, BrowserRouter } from 'react-router-dom';
import Header from './parts/Header';
import Main from './parts/Main';
import Dashboard from './user/Dashboard';

const App = () => 
    <div>
        <BrowserRouter >
            <Header></Header>
            <Switch>
                <Route exact path="/" component={Main} />
                <Route path="/dashboard" component={Dashboard} />    
            </Switch>
        </BrowserRouter >
    </div>;

export default App;