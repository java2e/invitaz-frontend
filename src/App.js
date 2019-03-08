import React, { Component } from 'react';

import Layout from './hoc/Layout/Layout';
import InvitazBuilder from "./containers/InvitazBuilder/InvitazBuilder";
import {connect} from 'react-redux';
import {BrowserRouter,withRouter} from 'react-router-dom';
import * as actions from './store/actions/index';

class App extends Component {

  componentDidMount () {
    this.props.onTryAutoSignup();
  }

  render () {
    return (
        <BrowserRouter>
      <div>
        <Layout>
          <InvitazBuilder />
        </Layout>
      </div>
        </BrowserRouter>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
      onTryAutoSignup : () => dispatch(actions.authCheckState())
  }
}

export default connect(null,mapDispatchToProps)(App);

