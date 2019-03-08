import React from 'react';

import classes from './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = (props) => (
    <ul className={classes.NavigationItems}>
        <NavigationItem link="/">AnaSayfa</NavigationItem>
        <NavigationItem link="/">Nasıl Çalışır?</NavigationItem>
        <NavigationItem link="/signup">Üye Ol</NavigationItem>

        {!props.isAuthenticated
            ? <NavigationItem link="/login">Giriş Yap</NavigationItem>
            : <NavigationItem link="/logout">Çıkış Yap</NavigationItem>}

    </ul>
);

export default navigationItems;
