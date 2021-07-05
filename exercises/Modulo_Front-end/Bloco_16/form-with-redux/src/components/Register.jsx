import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import * as dataUser from '../dataUser';

export default class Formulario extends Component {
  render() {

    const handleInput = ({target}) => {
      const { name, value } = target;
      this.setState({
        [name]: value
      })
    }

    const saveUser = (userInfo) => {
      dataUser.user.push(userInfo)
    }
    return (
      <>
      <h2>Nova conta</h2>
      <label htmlFor="Registro">
        <input type="text" name="name" placeholder="Nome"  onChange={ handleInput } required></input>
        <input type="text" name="age" placeholder="Idade" onChange={ handleInput }></input>
        <input type="text" name="email" placeholder="Email" onChange={ handleInput }></input>
        <input type="text" name="password" placeholder="Senha" onChange={ handleInput }></input>
        <Link to="/login"><button type="button" onClick={ () => saveUser(this.state) }>Criar</button></Link>
        <Link to="/login"><button type="button">Voltar</button></Link>
      </label>
      </>
    )
  }
}
