import React, {Component} from 'react';
import './Intro.scss';
import Manifeste from './Manifeste.js';

import firebase from 'firebase/app';
import 'firebase/storage';

class Intro extends Component {
	constructor () {
		super();
		this.state = {
			url: '',
			availWidth: window.screen.availWidth
		};
	}

	componentDidMount () {
		// Initialize Firebase
		const config = {
			apiKey: "AIzaSyD8OjJf2PMTWlHw1QFhc2iNndBztJ3f988",
			authDomain: "lafeteamacron.firebaseapp.com",
			databaseURL: "https://lafeteamacron.firebaseio.com",
			projectId: "lafeteamacron",
			storageBucket: "lafeteamacron.appspot.com",
			messagingSenderId: "37731838438"
		};
		firebase.initializeApp(config);

		const storage   = firebase.storage();
		const tractoRef = storage.refFromURL('gs://lafeteamacron.appspot.com/TractCheminot_FeteAMacron5mai.pdf')
		console.log(storage);
		tractoRef.getDownloadURL().then(url => this.setState({url}));
	}

	render () {
		return (
			<div className="Intro">

				<div className="col-one">
					<div className="fb-video Intro-video card"
					     data-href="https://www.facebook.com/lafeteamacron/videos/2031186810482075/"
					     data-width="400"
					     data-show-text="false">
					</div>

					<div className="Intro-networks card">
						<div className="card-content">
							<div className="card-title">
								MOBILISONS-NOUS !
							</div>
							<div className="logos">
								<a className="social-networks facebook--link"
								   href="https://www.facebook.com/lafeteamacron/">
									<i className="fab fa-facebook-square"></i>
								</a>
								<a className="social-networks"
								   href="https://twitter.com/LaFeteaMacron">
									<i className="fab fa-twitter-square"></i>
								</a>
							</div>
						</div>
					</div>

					<div className="Intro-networks card">
						<div className="Intro-manifeste__title card-content">
							<div className="card-title">
								LE TRACT AUX CHEMINOT•E•S
							</div>
						</div>
						<div className="card-action">
							<a className="downloads" href={this.state.url}>
								<i className="material-icons">file_download</i>
								<span>TELECHARGER LE TRACT</span>
							</a>
						</div>
					</div>

				</div>

				<div className="col-two">
					<div className="Intro-manifeste card">
						<div className="Intro-manifeste__image card-image">
							<img src={"/poing-levé.jpg"}/>
							<span className="card-title">LE MANIFESTE</span>
						</div>
						<div className="Intro-manifeste__texte card-content">
							<Manifeste/>
						</div>
						<div className="Intro-manifeste__sign card-action">
							<a href={"https://www.change.org/p/le-peuple-appel-au-samedi-5-mai-faire-sa-f%C3%AAte-%C3%A0-macron"}
							   className="sign__button ">
								<i className="material-icons">assignment</i>
								<span> Je signe l'appel sur change.org</span>
							</a>
						</div>
					</div>
				</div>

				<div className="col-three">
					{this.state.availWidth > 1200 &&
					<a className="twitter-timeline card"
					   data-width="400"
					   data-height="800"
					   data-theme="light"
					   data-link-color="#E81C4F"
					   href="https://twitter.com/LaFeteaMacron">
						Tweets by LaFeteAMacron
					</a>}
				</div>
			</div>
		);
	}
}

export default Intro;
