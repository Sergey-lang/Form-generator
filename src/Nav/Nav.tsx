import React from 'react';
import {NavLink} from 'react-router-dom';
import {PATH} from '../App';

import s from './Nav.module.css'

export const Nav: React.FC = () => {

    return (
        <nav>
            <ul className={s.listItems}>
                <li className={s.navItem}><NavLink to={PATH.HOME}>HOME</NavLink></li>
                <li className={s.navItem}><NavLink to={PATH.FORM}>FORM</NavLink></li>
            </ul>
        </nav>
    );
}
