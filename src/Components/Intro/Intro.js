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
					<div className="card">
						<div className="radio-parleur">
							<iframe width={this.state.elemWidth - 10}
							        height="300" scrolling="no" frameborder="no" allow="autoplay"
							        src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/425192382&color=%2ff1744&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true">
							</iframe>
						</div>
					</div>
					<div className="facebook-responsive" style={{'max-width': this.state.elemWidth}}>
						<div className="fb-video Intro-video card"
						     style={{width: this.state.elemWidth - 10, height: this.state.elemWidth - 10}}
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
						</div>
						<div className="logos">
							<a className="social-networks facebook--link card-action"
							   href="https://www.facebook.com/lafeteamacron/">
								<i className="fab fa-facebook-square"></i>
								<span> La Page de la communauté </span>
							</a>
							<a className="social-networks card-action facebook--link"
							   href="https://www.facebook.com/events/168405913879142/">
								<i className="fab fa-facebook-square"></i>
								<span> Inscrivez-vous à l'évènement </span>
							</a>
							<a className="social-networks card-action"
							   href="https://twitter.com/LaFeteaMacron">
								<i className="fab fa-twitter-square"></i>
								<span> Le Twitter du mouvement </span>
							</a>
						</div>
					</div>

					<div className="Intro-resources card">
						<div className="Intro-resources__title card-content">
							<div className="card-title">
								LE TRACT AUX CHEMINOT•E•S
							</div>
						</div>
						<a className="card-action downloads" href={this.state.tractoFile}>
							<i className="material-icons">file_download</i>
							<span>TELECHARGER LE TRACT</span>
						</a>
					</div>

					<div className="Intro-networks card">
						<div className="card-content">
							<div className="card-title">
								ECRIVEZ-NOUS !
							</div>
						</div>
						<div className="logos">
							<a className="social-networks facebook--link card-action"
							   href="mailto:contact@lafeteamacron.org">
								<i class="material-icons">email</i>
								<span> contact@lafeteamacron.org </span>
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
						<a href={"https://www.change.org/p/le-peuple-appel-au-samedi-5-mai-faire-sa-f%C3%AAte-%C3%A0-macron"}
						   className="sign__button card-action">
							<i className="material-icons">assignment</i>
							<span> Je signe l'appel sur change.org</span>
						</a>
					</div>
				</div>

				<div className="col-three">
					{this.state.screenWidth > 1200 &&
					<a class="twitter-timeline"
					   style={{width: '300px', height: '800px'}}
					   data-width="300"
					   data-dnt="true"
					   data-height="800"
					   href="https://twitter.com/hashtag/LaFeteaMacron"
					   data-widget-id="983051222847549440">
						Tweets sur #LaFeteaMacron
					</a>}
				</div>
			</div>
		);
	}
}

export default Intro;
