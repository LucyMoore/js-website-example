import React from 'react'
import ReactDOM from 'react-dom'
import Button from './Button'


module.exports = class Menu18 extends React.Component {
	render (){
	    return (
	    	<div id={this.props.id} className={this.props.className}>
		    	<Button className='buttonSmall hatshepsut' txt="Hatshepsut" onClick={this.props.onClick}></Button>
		    	<Button className='buttonSmall thutmose3' txt="Thutmose III">tut</Button>
		    	<Button className='buttonSmall thutmose4' txt="Thutmose IV">tut</Button>
	    	</div>
	   	)

	}
}
