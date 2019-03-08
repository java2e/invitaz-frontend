import React from 'react';
import classes from './Header.css';
import Logo from '../../Logo/Logo'
import NavigationItems from '../NavigationItems/NavigationItems';


const header = (props) => {

    return (
        <div className={classes.Header}>
            <div className={classes.Logo}>
                <Logo />
            </div>
            <div className={classes.Navigations}>
            <nav>
                <NavigationItems isAuthenticated={props.isAuthenticated}/>
            </nav>
            </div>
        </div>
    )
}

export default header;
