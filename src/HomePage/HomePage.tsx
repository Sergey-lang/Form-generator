import React from 'react';
import {Link} from 'react-router-dom';
import {PATH} from '../App';
import Button from '../Components/Button/Button';

import s from './HomePage.module.scss'

export const HomePage: React.FC = () => {

    return (
        <div className={s.wrapper}>
            <h1>HOME PAGE</h1>
            <div className={s.btnBox}>
                <Link to={PATH.FORM}>
                    <Button className={s.homePage_Btn}>Form Button</Button>
                </Link>
            </div>
        </div>
    );
}
