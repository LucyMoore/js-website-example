import React from 'react'
import ReactDOM from 'react-dom'
import Button from './Button'

function content(e){
	console.log(e.target)
	
}

module.exports = class Menu extends React.Component {

	render (){
	    return (
	    	<div>
		    	<Button txt="Home" />
		    	<Button txt="Map" />
		    	<Button txt="18th Dynasty"/>
		    	<Button txt="19th Dynasty"/>
		    	<Button txt="20th Dynasty"/>
		    	<Button txt="21st Dynasty"/>
	    	</div>
	   	)

	}
}