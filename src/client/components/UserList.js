import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchUsers } from '../actions';

class UserList extends Component {
  componentDidMount() {
    this.props.fetchUsers();
  }

  loadData() {
    
  }

  renderUsers() {
    if (!this.props.users) return null;

    return this.props.users.map(user => (
      <li key={user.id}>{user.name}</li>
    ));
  }

  render() {

    return (
      <div>
        <h1>Users</h1>
        <ul>
          {this.renderUsers()}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  users: state.users
});

export default connect(mapStateToProps, { fetchUsers })(UserList);