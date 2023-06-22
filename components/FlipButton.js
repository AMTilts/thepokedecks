import React, { Component } from 'react'
import { frontBackText, backDefault , ballDefault }	from '../pages/pokemon/[characterName]'

class FrontBackButton extends Component {

  render(props) {
  	return (
    	<div className="frontbackbuttons" onClick={this.props.ballDefault}>{this.props.children}</div>
 		)
	}
}

export default FrontBackButton;