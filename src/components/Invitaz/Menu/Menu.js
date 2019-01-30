import React from 'react';
import classes from './Menu.css'


const menu =(props)=> {

    return (

        <div className={classes.Menu} onClick={props.linkClicked}>
            <img src={props.imgLink} alt="MyBurger" />
            <h5>{props.title}</h5>
        </div>

    )

}

export default menu;