import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import requireAuth from '../../hocs/requireAuth';
import { fetchAdmins } from '../../actions';

class AdminListPage extends Component {
  componentDidMount() {
    if(this.props.admins.length === 0) {
      this.props.fetchAdmins();
    }
  }

  renderAdmins() {
    if (typeof this.props.admins.map !== 'function') return null;

    return this.props.admins.map(admin => (
      <li key={admin.id}>{admin.name}</li>
    ));
  }

  head() {
    return (
      <Helmet>
        <title>{`SSR App - Admin List (${this.props.admins.length})`}</title>
        <meta property="og:title" content="Admin List" />
      </Helmet>
    );
  }

  render() {
    return (
      <div>
        {this.head()}
        <h3>Protected List of Admins</h3>
        <ul>{this.renderAdmins()}</ul>
      </div>
    );
  }
}

const mapStateToProps = ({ admins }) => ({
  admins: admins || []
});

const loadData = ({ dispatch }) => dispatch(fetchAdmins());

export default {
  component: connect(mapStateToProps, { fetchAdmins })(requireAuth(AdminListPage)),
  loadData
};