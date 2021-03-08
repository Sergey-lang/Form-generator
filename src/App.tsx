import React from 'react';
import {Redirect, Route, Switch} from 'react-router-dom';
import {HomePage} from './HomePage/HomePage';
import {FormPage} from './FormPage/FormPage';
import {Nav} from './Nav/Nav';

import './App.css';

export const PATH = {
    HOME: '/home',
    FORM: '/form'
}

export const App: React.FC = () => {
    return (
        <div className={'app'}>
            <header>
                <Nav/>
            </header>
            <main>
                <Switch>
                    <Route path='/' exact render={() => <Redirect to={PATH.HOME}/>}/>
                    <Route path={PATH.HOME} exact render={() => <HomePage/>}/>
                    <Route path={PATH.FORM} exact render={() => <FormPage/>}/>
                </Switch>
            </main>
        </div>
    );
}

