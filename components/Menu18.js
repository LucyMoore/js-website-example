import React from 'react'
import ReactDOM from 'react-dom'
import Button from './Button'


module.exports = class Menu18 extends React.Component {
	render (){
		console.log(this.props.type, 'type')

	    return (
	    	<div id={this.props.id} className={this.props.className}>
		    	<Button className='buttonSmall' txt="Hatshepsut"></Button>
		    	<Button className='buttonSmall' txt="Thutmose III">tut</Button>
		    	<Button className='buttonSmall' txt="Thutmose IV">tut</Button>
	    	</div>
	   	)

	}
}
