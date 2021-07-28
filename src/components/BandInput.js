import React, { Component } from 'react'
// import { manageBand } from '../reducers/manageBand'

class BandInput extends Component {
  
    state = {
      name: '',
    }
  
  handleChange(event) {
    this.setState({
      name: event.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.addBand(this.state)
    this.setState({
      name: ''
    })
  }
  
  render(){
    return(
      <div>
        <form onSubmit={ this.handleSubmit }>
          <p>
            <label>add band</label>
            <input type="text" 
            onChange={ this.handleChange.bind(this) }
            value={this.state.name}
            />
          </p>
          <input type="submit" />
        </form>
      </div>
    );
  }
}

export default BandInput
