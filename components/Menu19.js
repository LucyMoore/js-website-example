import React from 'react'
import ReactDOM from 'react-dom'
import Button from './Button'


module.exports = class Menu extends React.Component {

	render (){
	    return (
	    	<div id={this.props.id} className={this.props.className} onClick={this.props.onClick}>
		    	<Button className='buttonSmall ramesses1' txt='Ramesses I'  />
		    	<Button className='buttonSmall seti1' txt='Seti I' />
		    	<Button className='buttonSmall ramesses2' txt='Ramesses the Great' />
	    	</div>
	   	)

	}
}
