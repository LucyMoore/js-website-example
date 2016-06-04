import React from 'react'
import ReactDOM from 'react-dom'
import Button from './Button'
import Menu from './Menu'

function test(e){
	console.log(e.target)
}

module.exports = class Content extends React.Component {
	constructor(props){
    	super(props)
    	this.state={content: ''}
	}

	update(e){
		console.log(e.target.className)
		var toDisplay = e.target.className
		if(toDisplay === 'home'){
			this.setState({content: 'home'})
		}
		else if(toDisplay === 'map'){
			this.setState({content: 'map'})
		}
	}

	render (){
	    return (
	    	<div id="lower">
		    	<div id="menu">
			    <Menu onClick={test}/>
		    	</div>
		    	<div id="content">
		    		{this.state.content}
	    		</div>
	    	</div>
	   	)

	}
}
