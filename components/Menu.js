import React from 'react'
import ReactDOM from 'react-dom'
import Button from './Button'


module.exports = class Menu extends React.Component {

	render (){
	    return (
	    	<div id={this.props.id} className={this.props.className}>
		    	<Button className='buttonSmall' />
		    	<Button className='buttonSmall' />
		    	<Button className='buttonSmall' />
	    	</div>
	   	)

	}
}
