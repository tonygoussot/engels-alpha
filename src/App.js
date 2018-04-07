import React, {Component} from 'react';
import Header from "./Components/Header/Header";
import Intro from "./Components/Intro/Intro";
import Comite from "./Components/Comite/Comite";
import Bulletin from "./Components/Bulletin/Bulletin";

class App extends Component {
	render () {
		return (
			<div className="fam">
				<Header/>
				<Intro/>
				<Bulletin/>
				<Comite/>
			</div>
		);
	}
}

export default App;
