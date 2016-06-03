import React from 'react'
import ReactDOM from 'react-dom'


module.exports = class Button extends React.Component {

	render (){
	    return (
		    	<button className={this.props.className} onClick={this.props.onClick}> {this.props.txt} </button>
	   	)

	}
}