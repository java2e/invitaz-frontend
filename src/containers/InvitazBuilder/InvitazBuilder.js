import React, {Component} from 'react';

import Aux from '../../hoc/Aux/Aux';
import Invitaz from '../../components/Invitaz/Invitaz'

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

        alert('You continue!'+linkState);
    }

    render() {

        return (
            <Aux>
                <Invitaz links={this.state.links} linkClicked={this.linkClicked}/>
            </Aux>
        );
    }
}

export default InvitazBuilder;