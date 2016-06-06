import React from 'react'
import ReactDOM from 'react-dom'
import Button from './Button'
import Menu18 from './Menu18'
import Menu19 from './Menu19'
import Menu20 from './Menu20'
import PageData from './Page-Data'

var menuType = ''

module.exports = class Content extends React.Component {
	constructor(props){
    	super(props)
    	this.state={content: 'start', img: <img src='' />}
	}

	update(e){
		if(e.currentTarget.name === 'home'){
			this.setState({content: 'this is the home page with the home information'})
		}
		else if(e.currentTarget.name === 'map'){
			this.setState({content: <img src='img/map.jpg'></img>})
		}

	}

	mount(e){
		if(e.currentTarget.name === '18th'){
			this.setState({content: <h1>18th Dynasty</h1>})
			document.getElementById("one").className = "visible";
			document.getElementById("two").className = "hidden";
			document.getElementById("three").className = "hidden";
		}
		if(e.currentTarget.name === '19th'){
			this.setState({content: <h1>19th Dynasty</h1>})
			document.getElementById("one").className = "hidden";
			document.getElementById("two").className = "visible";
			document.getElementById("three").className = "hidden";
		}
		if(e.currentTarget.name === '20th'){
			this.setState({content: <h1>20th Dynasty</h1>})
			document.getElementById("one").className = "hidden";
			document.getElementById("two").className = "hidden";
			document.getElementById("three").className = "visible";
		}

	}

	render (){
	    return (
	    	<div id="lower">
		    	<div id="side-menu">
				    <button name='home' className='buttonLarge' onClick={this.update.bind(this)}>home</button>
						<button name='map' className='buttonLarge' onClick={this.update.bind(this)}>map</button>
						<button name='18th' className='buttonLarge' onClick={this.mount.bind(this)}>18th Dynasty</button>
						<Menu18 id='one' type={menuType} className='hidden' />
						<button name='19th' className='buttonLarge' onClick={this.mount.bind(this)}>19th Dynasty</button>
						<Menu19 id='two' type={menuType} className='hidden' />
						<button name='20th' className='buttonLarge' onClick={this.mount.bind(this)}>20th Dynasty</button>
						<Menu20 id='three' type={menuType} className='hidden' />
						<button name='20th' className='buttonLarge' onClick={this.mount.bind(this)}>21th Dynasty</button>
						<Menu20 id='three' type={menuType} className='hidden' />
					</div>
		    	<div id="content">
		    		<PageData txt={this.state.content}></PageData>
	    		</div>
	    	</div>
	   	)
	}
}
