import React from 'react'
import ReactDOM from 'react-dom'
import Button from './Button'
import Menu from './Menu'



module.exports = class Content extends React.Component {
	constructor(props){
    	super(props)
    	this.state={content: ''}
	}

	update(e){
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
			    	<Button className="home" txt="Home" onClick={this.update.bind(this)} />
			    	<Button className="map" txt="Map" onClick={this.update.bind(this)}  />
			    	<Button className="18th" txt="18th Dynasty" onClick={this.update.bind(this)}/>
			    	<Button className="hidden" txt="Home" onClick={this.update.bind(this)} />
			    	<Button className="hidden" txt="Home" onClick={this.update.bind(this)} />
			    	<Button className="hidden" txt="Home" onClick={this.update.bind(this)} />
			    	<Button className="hidden" txt="Home" onClick={this.update.bind(this)} />

			    	<Button className="19th" txt="19th Dynasty" onClick={this.update.bind(this)}/>
			    	<Button className="hidden" txt="Home" onClick={this.update.bind(this)} />
			    	<Button className="hidden" txt="Home" onClick={this.update.bind(this)} />
			    	<Button className="hidden" txt="Home" onClick={this.update.bind(this)} />
			    	<Button className="hidden" txt="Home" onClick={this.update.bind(this)} />

			    	<Button className="20th" txt="20th Dynasty" onClick={this.update.bind(this)}/>
			    	<Button className="hidden" txt="Home" onClick={this.update.bind(this)} />
			    	<Button className="hidden" txt="Home" onClick={this.update.bind(this)} />
			    	<Button className="hidden" txt="Home" onClick={this.update.bind(this)} />
			    	<Button className="hidden" txt="Home" onClick={this.update.bind(this)} />

			    	<Button className="21st" txt="21st Dynasty" onClick={this.update.bind(this)}/>
			    	<Button className="hidden" txt="Home" onClick={this.update.bind(this)} />
			    	<Button className="hidden" txt="Home" onClick={this.update.bind(this)} />
			    	<Button className="hidden" txt="Home" onClick={this.update.bind(this)} />
			    	<Button className="hidden" txt="Home" onClick={this.update.bind(this)} />

		    	</div>
		    	<div id="content">
		    		{this.state.content}
	    		</div>
	    	</div>
	   	)

	}
}