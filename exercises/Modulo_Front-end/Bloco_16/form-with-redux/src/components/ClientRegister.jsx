import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as dataUser from '../dataUser'
class ClientRegister extends Component {
  render() {
    return (
      <>
        Usuarios:
        <ul>
          {dataUser.user.map((userInfo) => <h2>{`${userInfo.email} ${userInfo.password}`}</h2>)}
        </ul>
      </>
    )
  }
}

export default connect()(ClientRegister)
