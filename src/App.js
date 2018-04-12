import React, {Component} from 'react';

import Header from "./Components/Header/Header";
import Intro from "./Components/Intro/Intro";
import Comite from "./Components/Comite/Comite";
import Bulletin from "./Components/Bulletin/Bulletin";

import firebase from "firebase/app/index";
import 'firebase/storage';

class App extends Component {
	static getScreenWidth () {
		const width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
		console.log('setting width', width);
		return width;
	}

	constructor (props) {
		super(props);
		this.handleResize = this.handleResize.bind(this);

		this.state        = {
			width: App.getScreenWidth(),
			storage: {}
		};
	}


	handleResize () {
		this.setState({width: App.getScreenWidth()});
	}

	componentDidMount () {
		window.addEventListener("resize", this.handleResize);
	}

	componentWillMount () {
		const config = {
			apiKey: "AIzaSyD8OjJf2PMTWlHw1QFhc2iNndBztJ3f988",
			authDomain: "lafeteamacron.firebaseapp.com",
			databaseURL: "https://lafeteamacron.firebaseio.com",
			projectId: "lafeteamacron",
			storageBucket: "lafeteamacron.appspot.com",
			messagingSenderId: "37731838438"
		};
		firebase.initializeApp(config);

		this.setState({storage: firebase.storage()});
	}


	componentWillUnmount () {
		window.addEventListener("resize", null);
	}


	render () {
		return (
			<div className="fam">
				<Header/>

				{/*<blockquote class="twitter-video" data-lang="fr">
					<p lang="fr" dir="ltr">Artiste engagée,
					<a href="https://twitter.com/hashtag/CorinneMasiero?src=hash&amp;ref_src=twsrc%5Etfw">#CorinneMasiero</a>
					 ?
					<br/>Visiblement oui ! ✊ <a href="https://twitter.com/hashtag/C%C3%A0Vous?src=hash&amp;ref_src=twsrc%5Etfw">#CàVous</a>
					<a href="https://t.co/YFCYKh0RBe">pic.twitter.com/YFCYKh0RBe</a>
				  </p>&mdash; C à vous (@cavousf5)
					<a href="https://twitter.com/cavousf5/status/984121370178138113?ref_src=twsrc%5Etfw">
					11 avril 2018
				</a>
				</blockquote>
				<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>*/}



				<Intro storage={this.state.storage} width={this.state.width}/>
				<Bulletin width={this.state.width}/>
				<Comite storage={this.state.storage} width={this.state.width}/>
			</div>
	);
	}
	}

	export default App;
