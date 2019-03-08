import React, { Component } from 'react';

import Aux from '../Auxx/Auxx';
import classes from './Layout.css';
import Header from '../../components/Navigation/Header/Header'
import {connect} from 'react-redux';

class Layout extends Component {
    state = {
        showSideDrawer: false
    }

    sideDrawerClosedHandler = () => {
        this.setState( { showSideDrawer: false } );
    }

    sideDrawerToggleHandler = () => {
        this.setState( ( prevState ) => {
            return { showSideDrawer: !prevState.showSideDrawer };
        } );
    }

    render () {
        return (
            <Aux>
                <Header isAuthenticated={this.props.isAuthenticated}/>
                <main className={classes.Content}>
                    {this.props.children}
                </main>
            </Aux>
        )
    }
}


const mapStateToProps = state => {

    return {
        isAuthenticated:state.auth.token!==null
    };

}

export default connect(mapStateToProps) (Layout);
