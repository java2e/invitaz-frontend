import React, {Component} from 'react';

import Aux from '../../../hoc/Aux/Aux';
import classes from './Profile.css';
import ProfileFoto from "../../../assets/images/profile.png";
import Line from "../../../assets/images/line.png";


import { ListGroup } from 'react-bootstrap';


class Profile extends Component {


    render() {

        return (
            <Aux>
                <div className={classes.Profile}>

                    <div>
                        <div className={classes.ProfileLeft}>
                            <div>
                                <div className={classes.ProfileFoto}>
                                    <img  width={100} src={ProfileFoto} alt="MehmetDemircioglu"/>
                                </div>
                                <div>
                                    Mehmet Demircioglu
                                </div>
                            </div>
                            <div className={classes.NavigationLinks}>

                                <div>
                                    <img width={100} height={2} src={Line} alt="MehmetDemircioglu"/>
                                </div>
                                <div>ETKINLIKLERIM</div>
                                <div>
                                    <img width={100} height={2} src={Line} alt="MehmetDemircioglu"/>
                                </div>
                                <div>KATILIMCILAR</div>
                                <div>
                                    <img width={100} height={2} src={Line} alt="MehmetDemircioglu"/>
                                </div>
                                <div>HEDIYELERIM</div>
                                <div>
                                    <img width={100} height={2} src={Line} alt="MehmetDemircioglu"/>
                                </div>
                                <div>MESAJLAR</div>
                                <div>
                                    <img width={100} height={2} src={Line} alt="MehmetDemircioglu"/>
                                </div>
                                <div>BILDIRIMLER</div>
                                <div>
                                    <img width={100} height={2} src={Line} alt="MehmetDemircioglu"/>
                                </div>
                                <div>AYARLAR</div>


                            </div>
                        </div>
                        <div className={classes.ProfileRight}>
                            right
                        </div>
                    </div>

                </div>
            </Aux>
        );
    }
}

export default Profile;