import React, { Component } from 'react'

export class TextArea extends Component {
  render() {
    const { value, handleInfo } = this.props

    return (
        <label>
          <textarea name='areaDeTexto' value={value} onChange={handleInfo}></textarea>
        </label>
    )
  }
}

export default TextArea
