import React from 'react'
import ReactDOM from 'react-dom'
import Button from './Button'
import Menu from './Menu'

function test(e){
	console.log(e.target.dataset.txt)
}

module.exports = class Content extends React.Component {
	constructor(props){
    	super(props)
    	this.state={content: ''}
	}

	update(e){
		console.log(e.target.txt)
		var toDisplay = e.target.className
		if(toDisplay === 'home'){
			this.setState({content: 'home'})
		}
		else if(toDisplay === 'map'){
			this.setState({content: 'map'})
		}
	}

	mount(e){
		console.log(e.currentTarget.name,'this')
		if(e.currentTarget.name === 'home'){
			document.getElementById("one").className = "visible";
			document.getElementById("two").className = "hidden";
			document.getElementById("three").className = "hidden";
		}
		if(e.currentTarget.name === 'map'){
			document.getElementById("one").className = "hidden";
			document.getElementById("two").className = "visible";
			document.getElementById("three").className = "hidden";
		}
		if(e.currentTarget.name === '18th'){
			document.getElementById("one").className = "hidden";
			document.getElementById("two").className = "hidden";
			document.getElementById("three").className = "visible";
		}

	}

	render (){
	    return (
	    	<div id="lower">
		    	<div id="side-menu">
				    <button name='home' className='buttonLarge' onClick={this.mount.bind('this')}>home</button>

						<Menu id='one' className='hidden' />

						<button name='map' className='buttonLarge' onClick={this.mount.bind('this')}>map</button>

						<Menu id='two' className='hidden' />

						<button name='18th' className='buttonLarge' onClick={this.mount.bind('this')}>18th Dynasty</button>

						<Menu id='three' className='hidden' />

					</div>
		    	<div id="content">
		    		{this.state.content}
	    		</div>
	    	</div>
	   	)
	}
}
