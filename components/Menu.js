import React from 'react'
import ReactDOM from 'react-dom'
import Button from './Button'


module.exports = class Menu extends React.Component {

	render (){
	    return (
	    	<div>
		    	<Button className="home" txt="Home" onClick={this.props.onClick}/>
		    	<Button className="map" txt="Map" />
		    	<Button className="18th" txt="18th Dynasty"/>
		    	<Button className="19th" txt="19th Dynasty"/>
		    	<Button className="20th" txt="20th Dynasty"/>
		    	<Button className="21st" txt="21st Dynasty"/>
	    	</div>
	   	)

	}
}
