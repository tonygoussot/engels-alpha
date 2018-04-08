import React, {Component} from 'react';
import './Intro.scss';
import Manifeste from './Manifeste.js';

import firebase from 'firebase/app';
import 'firebase/storage';

class Intro extends Component {
	constructor (props) {
		super(props);
		this.state = {
			tractoFile: '',
			imgPl: '',
			screenWidth: props.width,
			elemWidth: props.width
		};
	}

	setElementsWidth (width) {
		const capElementsWidth = width > 400 ? 400 : width;
		this.setState({elemWidth: capElementsWidth, screenWidth: width});
	}

	componentWillMount () {
		this.setElementsWidth(this.props.width);
	}

	componentWillReceiveProps (nextProps) {
		if (nextProps.width && nextProps.width !== this.state.elemWidth) {
			this.setElementsWidth(nextProps.width);
		}
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
		const plRef     = storage.refFromURL('gs://lafeteamacron.appspot.com/poing-levé.jpg');
		const tractoRef = storage.refFromURL('gs://lafeteamacron.appspot.com/TractCheminot_FeteAMacron5mai.pdf');
		tractoRef.getDownloadURL().then(url => this.setState({tractoFile: url}));
		plRef.getDownloadURL().then(url => this.setState({imgPl: url}));
	}

	render () {
		return (
			<div className="Intro">

				<div className="col-one">
					<div className="facebook-responsive" style={{'max-width': this.state.elemWidth}}>
						<div className="fb-video Intro-video card"
						     style={{width: this.state.elemWidth-10, height: this.state.elemWidth-10}}
						     data-href="https://www.facebook.com/lafeteamacron/videos/2031186810482075/"
						     data-width={this.state.elemWidth}
						     data-show-text="false">
						</div>
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

					<div className="Intro-resources card">
						<div className="Intro-resources__title card-content">
							<div className="card-title">
								LE TRACT AUX CHEMINOT•E•S
							</div>
						</div>
						<div className="card-action">
							<a className="downloads" href={this.state.tractoFile}>
								<i className="material-icons">file_download</i>
								<span>TELECHARGER LE TRACT</span>
							</a>
						</div>
					</div>

				</div>

				<div className="col-two" style={{'max-width': this.state.elemWidth}}>
					<div className="Intro-manifeste card">
						<div className="Intro-manifeste__image card-image">
							<img src={this.state.imgPl}/>
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
					{this.state.screenWidth > 1200 &&
					<a className="twitter-timeline card"
					   style={{width: '300px', height: '800px'}}
					   data-width="300"
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
