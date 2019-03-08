import React from 'react';
import classes from './Invitaz.css';
import backGround from '../../assets/images/invitaz_header_background.png';
import Content from '../Invitaz/Content/Content'

const invitaz =(props) => {

    return(
        <div className={classes.Invitaz} style={{backgroundImage: "url(" + backGround + ")"}}>
            <Content isAuthenticated={props.isAuth} links={props.links} linkClicked={props.linkClicked}/>
        </div>
    );

}

export default invitaz;
