import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import UrlForm from './url/UrlForm.js';
import Login from './user/Login.js';

const App = () => 
    <div>
        <ul>
            <li><Link to="/login">Login</Link></li>
        </ul>
        <Switch>
            <Route path="/login" component={Login} />
        </Switch>
        <UrlForm></UrlForm>
    </div>;

export default App;