import React, { Component } from 'react'
import './Form.css'

class Form extends Component {
  constructor() {
    super()
    this.state = {
      title: '',
      description: ''
    }
  }

  handleChange(event) {
    this.setState({ [event.target.title]: [event.target.description] })
  }

  render() {
    return (
      <form>
        <input type='text' placeholder='Title' name='title' value={this.state.title}>
        </input>
        <input type='text' placeholder='Description' name='description' value={this.state.description}>
        </input>
        <button>Submit</button>
      </form>
    )
  }
}

export default Form