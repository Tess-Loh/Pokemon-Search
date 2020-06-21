import React from "react";
import { Switch, Route } from 'react-router-dom';
import Home from './home';
import About from './about';

const Main = () => (
    <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/about' component={About} />
    </Switch>
)

export default Main;