import React, {Component} from 'react';
import './Intro.scss';
import Manifeste from './Manifeste.js';

class Intro extends Component {
	constructor (props) {
		super(props);
		this.state = {
			tractoFile: '',
			imgPl: '',
			videoFile: '',
			poster: '',
			ref19: '',
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

	componentDidMount () {
		if (this.props.width && this.props.width !== this.state.elemWidth) {
			this.setElementsWidth(this.props.width);

			const plRef     = this.props.storage.refFromURL('gs://lafeteamacron.appspot.com/poing-levé.jpg');
			const tractoRef = this.props.storage.refFromURL('gs://lafeteamacron.appspot.com/TractCheminot_FeteAMacron5mai.pdf');
			const videoRef  = this.props.storage.refFromURL('gs://lafeteamacron.appspot.com/#5mai - #LaFeteaMacron - Du mouvement Social !.mp4');
			const posterRef = this.props.storage.refFromURL('gs://lafeteamacron.appspot.com/poster3.png');
			const ref19     = this.props.storage.refFromURL('gs://lafeteamacron.appspot.com/FICHE 19 .png');

			tractoRef.getDownloadURL().then(url => this.setState({tractoFile: url}));
			plRef.getDownloadURL().then(url => this.setState({imgPl: url}));
			videoRef.getDownloadURL().then(url => this.setState({videoFile: url}));
			posterRef.getDownloadURL().then(url => this.setState({poster: url}));
			ref19.getDownloadURL().then(url => this.setState({ref19: url}));
		}
	}

	render () {
		return (
			<div className="Intro">

				<div className="col-one">

					<div className="Intro-comites card">
						<div className="card-content">
							<div className="card-title">
								LE TRACT SPECIAL 19 AVRIL
							</div>
						</div>
						<div className="logos">
							<a className="sign__button card-action"
							   href={this.state.ref19}
							   target="_blank">
								<i class="material-icons">assignment</i>
								<span> TELECHARGEZ LE TRACT SPECIAL </span>
							</a>
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
							   href="https://www.facebook.com/lafeteamacron/"
							   target="_blank">
								<i className="fab fa-facebook-square"></i>
								<span> La Page de la communauté </span>
							</a>
							<a className="social-networks card-action facebook--link"
							   href="https://www.facebook.com/events/168405913879142/"
							   target="_blank">
								<i className="fab fa-facebook-square"></i>
								<span> Inscrivez-vous à l'évènement </span>
							</a>
							<a className="social-networks card-action"
							   href="https://twitter.com/LaFeteaMacron"
							   target="_blank">
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
						<a className="card-action resources"
						   href={this.state.tractoFile}
						   target="_blank">
							<i className="material-icons">file_download</i>
							<span>TELECHARGEZ LE TRACT</span>
						</a>
					</div>

					<div className="Intro-networks card">
						<div className="card-content">
							<div className="card-title">
								ECRIVEZ-NOUS !
							</div>
						</div>
						<div className="logos">
							<a className="resources card-action"
							   href="mailto:contact@lafeteamacron.org">
								<i className="material-icons">email</i>
								<span> contact@lafeteamacron.org </span>
							</a>
						</div>
					</div>

					<div className="Intro-networks card">
						<div className="card-content">
							<div className="card-title">
								SIGNEZ L'APPEL !
							</div>
						</div>
						<div className="logos">
							<a href={"https://www.change.org/p/le-peuple-appel-au-samedi-5-mai-faire-sa-f%C3%AAte-%C3%A0-macron"}
							   className="sign__button card-action">
								<i className="material-icons">assignment</i>
								<span> Je signe sur change.org</span>
							</a>
						</div>
					</div>

					<div className="Subscribe-newsletter card">
						<div className="card-content">
							<span className="Subscribe-newsletter card-title"> LA LISTE DE DIFFUSION</span>
						</div>
						<div className="card-action">
							<iframe src="https://landing.mailerlite.com/webforms/landing/b1s0p3"
							        style={{
								        border: 'none',
								        height: '180px',
								        maxWidth: this.state.elemWidth
							        }}>
							</iframe>
						</div>
					</div>
				</div>

				<div className="col-two" style={{maxWidth: this.state.elemWidth}}>
					<div className="Intro-manifeste card">
						<div className="Intro-manifeste__image card-image">
							<img src={this.state.imgPl}/>
							<span className="card-title">Jeudi 19 Avril</span>
						</div>
						<div className="Intro-manifeste__texte card-content">
							<Manifeste/>
						</div>
					</div>
				</div>

				<div className="col-three">
					{this.state.screenWidth > 1200 &&
					<a className="twitter-timeline"
					   style={{width: '300px', height: '1000px'}}
					   data-width="300"
					   data-dnt="true"
					   data-height="1000"
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
