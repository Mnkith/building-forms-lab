import React, { Component } from 'react'
import BandInput from '../components/BandInput'
import { connect } from 'react-redux'
import Bands from '../components/Bands'


class BandsContainer extends Component {
  render() {
    console.log(this.props.bands)
    return(
      <div>
        <BandInput addBand={ this.props.manageBand }/>
        <Bands bands={this.props.bands}/>
      </div>
    )
  }
}

const msp = s => {
  return {
    bands: s.bands
  }
}

const mdp = d => {
  return {
    manageBand: band => d({ type: 'ADD_BAND', band})
  }
}

export default connect(msp, mdp)(BandsContainer)
