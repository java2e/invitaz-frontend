import React, {Component} from 'react';

import Aux from '../../hoc/Auxx/Auxx';
import Invitaz from '../../components/Invitaz/Invitaz'
import {connect} from 'react-redux';

class InvitazBuilder extends Component {

    state = {

        links: {
            link1: false,
            link2: false,
            link3: false,
            link4: false

        }

    }

    linkClicked = (link) => {

        const linkState=this.state.links[link];

        const updatedLinks = {
            ...this.state.links
        };

        Object.keys( updatedLinks ).map((igKey) => {
                if(igKey !== link) {
                    return updatedLinks[igKey] = false
                }
                else {
                    return updatedLinks[igKey] = true
                }
            }
        )

        this.setState({links:updatedLinks});

        console.log(updatedLinks);

    }

    render() {

        return (
            <Aux>
                <Invitaz isAuth={this.props.isAuthenticated} links={this.state.links} linkClicked={this.linkClicked}/>
            </Aux>
        );
    }
}


const mapStateToProps = state => {

    return {
        isAuthenticated:state.auth.token!==null
    };
};

export default connect(mapStateToProps)(InvitazBuilder)
