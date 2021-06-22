import React, { Component } from 'react'
import ValidEmail from './components/ValidEmail';

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      email: '',
      saveEmail: '',
    };
  }

  handleEmailBox(value) {
    this.setState({ email: value});
  }

  changeEmailSaved(value) {
    this.setState({ saveEmail: value, email: ''})
  }
  render() {
    const { email, saveEmail } = this.state;
    return (
      <div className="App">
        <label htmlFor="id-email">
          Email
          <input 
          id="id-email"
          value={ email }
          type="email"
          onChange={ (element) => this.handleEmailBox(element.target.value) }
          />
        </label>
        <input 
          id="btn=enviar"
          type="button"
          data-testid="id-send"
          value="Enviar"
          onClick={ () => this.changeEmailSaved(email) }
        />
        <input id="btn-id" type="button" value="Voltar" />
        <ValidEmail email={saveEmail}/>
      </div>
    )
  }
}