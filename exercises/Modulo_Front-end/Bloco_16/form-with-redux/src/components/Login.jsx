import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link, Redirect } from 'react-router-dom';
import * as loginActions from '../redux/actions/loginActions';
class Login extends Component {
  constructor() {
    super()

    this.state = {
      inputEmail: '',
      inputPassword: '',
    }
  }

  render() {

    const handleInputEmail = ({ target }) => {
      const { value } = target
      this.setState({
        inputEmail: value,
      })
    }

    const handleInputPassword = ({ target }) => {
      const { value } = target
      this.setState({
        inputPassword: value,
      })
    }

    const { loginUser } = this.props;
    const { inputEmail, inputPassword } = this.state
    return (
      <>
        <h2>Login</h2>
          <input type='text' placeholder="Email" onChange={ handleInputEmail }></input>
          <input type='password' placeholder="Senha" onChange={ handleInputPassword }></input>
          <button type="button" onClick={ () => loginUser(inputEmail,inputPassword) }>Entrar</button>
          <Link to="/register"><button type="button">Criar nova conta</button></Link>
      </>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  loginUser: (email,password) => dispatch(loginActions.loginUser(email,password))
})

export default connect(null,mapDispatchToProps)(Login)
