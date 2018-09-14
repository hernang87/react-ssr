import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchUsers } from '../../actions';
import { Helmet } from 'react-helmet';

class UserListPage extends Component {
  componentDidMount() {
    if(this.props.users.length === 0) {
      this.props.fetchUsers();
    }
  }

  renderUsers() {
    if (typeof this.props.users.map !== 'function') return null;

    return this.props.users.map(user => (
      <li key={user.id}>{user.name}</li>
    ));
  }

  head() {
    return (
      <Helmet>
        <title>{`SSR App - User List (${this.props.users.length})`}</title>
        <meta property="og:title" content="User List" />
      </Helmet>
    );
  }

  render() {
    return (
      <div>
        {this.head()}
        <h2>Users</h2>
        <ul>{this.renderUsers()}</ul>
      </div>
    );
  }
}

const mapStateToProps = ({ users }) => ({
  users: users || []
});

const loadData = store => store.dispatch(fetchUsers());

export default {
  component: connect(mapStateToProps, { fetchUsers })(UserListPage),
  loadData
};