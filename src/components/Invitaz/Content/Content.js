import React from 'react';
import classes from './Content.css';
import Menu from '../Menu/Menu'
import Link1 from '../../../assets/images/link1.png';
import Link2 from '../../../assets/images/link2.png';
import Link3 from '../../../assets/images/link3.png';
import Link4 from '../../../assets/images/link4.png';
import Event from '../Event/Event'
import Profile from '../Profile/Profile';
import Login from '../Login/Login';
import SignUp from '../Login/SignUp';
import Logout from '../../../containers/Logout/Logout';
import {Route} from 'react-router-dom';



const content = (props) => (


    <div className={classes.Content}>

        <Route path="/" exact render={ () =>
            <div>
        <div><h3>Etkinlik Turunu Seciniz</h3></div>
        <a href="/event1"><Menu linkClicked={() => props.linkClicked('link1')} imgLink={Link1} title="Düğün / Nişan Davetiyesi Oluştur"/></a>
        <Menu imgLink={Link2} title="Topluluk Davetiyesi Oluştur"/>
        <Menu imgLink={Link4} title="Yardım Çağrısı Oluştur"/>
        <Menu imgLink={Link3} title="Organizasyon Davetiyesi Oluştur"/>
        </div>
        }
        />

        <Route path="/event1" exact component={Event}/>
        <Route path="/profile" exact component={Profile}/>
        <Route path="/login" exact component={Login}/>
        <Route path="/logout" exact component={Logout}/>
        <Route path="/signup" exact component={SignUp}/>


    </div>

)

export default content;
