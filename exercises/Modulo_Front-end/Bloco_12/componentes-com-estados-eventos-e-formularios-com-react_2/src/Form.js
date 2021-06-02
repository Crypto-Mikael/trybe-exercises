import React, { Component } from 'react';
import TextArea from './TextArea'

export class Form extends Component {
  constructor() {
    super()

    this.state = {
      nome: '',
      email: '',
      textarea: '',
      checked: '',
      fruta: '',
    };

    this.handleEventInForm = this.handleEventInForm.bind(this);
  }
  
  handleEventInForm({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({
      [name]: value
    });
  }

  render() {
    return (
      <div>
        <form>
        <label>
          <select name='select' value={this.state.fruta} onChange={this.handleEventInForm}>
            <option value='laranja'>laranja</option>
            <option value='limao'>limão</option>
            <option value='coco'>Coco</option>
            <option value='manga'>Manga</option>
            <option value='abacate'>Abacate</option>
          </select>
        </label>
        <label>
          <input name='nome' type='text' value={this.state.nome} onChange={this.handleEventInForm}></input>
        </label>
        <label>
          <input name='email' type='text' value={this.state.email} onChange={this.handleEventInForm}></input>
        </label>
        <TextArea value={this.state.textarea} handleInfo={this.handleEventInForm}/>
        <label>
          <input name='checkbox' type='checkbox' value={this.state.checked} onChange={this.handleEventInForm}></input>
        </label>
        </form>
      </div>
    )
  }
}

export default Form
