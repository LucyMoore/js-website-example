import React from 'react'
import ReactDOM from 'react-dom'
import Button from './Button'
import Menu from './Menu'



module.exports = class Content extends React.Component {
	constructor(props){
    	super(props)
    	this.state={content: 'home'}
	}

	update(e){
		var toDisplay = e.target.className
		if(toDisplay === 'home'){
			console.log('test')
		}
	}

	render (){
	    return (
	    	<div id="lower">
		    	<div id="menu">
			    	<Button className="home" txt="Home" onClick={this.update.bind(this)} />
			    	<Button className="map" txt="Map" onClick={this.update.bind(this)}  />
			    	<Button className="18th" txt="18th Dynasty" />
			    	<Button className="19th" txt="19th Dynasty" />
			    	<Button className="20th" txt="20th Dynasty" />
			    	<Button className="21st" txt="21st Dynasty" />
		    	</div>
		    	<div id="content">
		    	{this.state.content}
	    		</div>
	    	</div>
	   	)

	}
}