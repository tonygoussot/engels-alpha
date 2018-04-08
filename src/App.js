import React, {Component} from 'react';

import Header from "./Components/Header/Header";
import Intro from "./Components/Intro/Intro";
import Comite from "./Components/Comite/Comite";
import Bulletin from "./Components/Bulletin/Bulletin";

class App extends Component {
	static getScreenWidth () {
		const width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
		console.log('setting width', width);
		return width;
	}

	constructor (props) {
		super(props);
		this.handleResize   = this.handleResize.bind(this);
		this.state          = {
			width: App.getScreenWidth()
		};
	}


	handleResize () {
		this.setState({width: App.getScreenWidth()});
	}

	componentDidMount () {
		window.addEventListener("resize", this.handleResize);
	}

	componentWillUnmount () {
		window.addEventListener("resize", null);
	}


	render () {
		console.log('rendering App', this.state.width);
		return (
			<div className="fam">
				<Header/>
				<Intro width={this.state.width}/>
				<Bulletin width={this.state.width}/>
				<Comite width={this.state.width}/>
			</div>
		);
	}
}

export default App;
