import React, {Component} from 'react';
import Gallery from 'react-grid-gallery';
import './Media.scss';

class Media extends Component {

	constructor(props) {
		super(props);

		this.state = {
			PAFjpg: '',
			TUNjpg: '',
			LOUjpg: '',
			USIjpg: '',
			POPjpg: '',
			RPAjpg: '',
			galleryImages: []
		};
	}

	componentDidMount() {
		const refPAFjpg = this.props.storage.refFromURL('gs://lafeteamacron.appspot.com/affiches/photo5962927780117196152.jpg');
		const refTUNjpg = this.props.storage.refFromURL('gs://lafeteamacron.appspot.com/affiches/photo5962927780117196153.jpg');
		const refLOUjpg = this.props.storage.refFromURL('gs://lafeteamacron.appspot.com/affiches/photo5962927780117196154.jpg');
		const refUSIjpg = this.props.storage.refFromURL('gs://lafeteamacron.appspot.com/affiches/photo5962935652792249775.jpg');
		const refPOPjpg = this.props.storage.refFromURL('gs://lafeteamacron.appspot.com/affiches/photo5962935652792249776.jpg');
		const refRPAjpg = this.props.storage.refFromURL('gs://lafeteamacron.appspot.com/affiches/photo5962935652792249777.jpg');

		// Rouge
		refPAFjpg.getDownloadURL().then(url => this.setState({PAFjpg: url}));
		refTUNjpg.getDownloadURL().then(url => this.setState({TUNjpg: url}));
		refLOUjpg.getDownloadURL().then(url => this.setState({LOUjpg: url}));
		refUSIjpg.getDownloadURL().then(url => this.setState({USIjpg: url}));
		refPOPjpg.getDownloadURL().then(url => this.setState({POPjpg: url}));
		refRPAjpg.getDownloadURL().then(url => this.setState({RPAjpg: url}));

		const prefix1000reasons = 'gs://lafeteamacron.appspot.com/affiches/1000raisons/';
		const all1000reasons = [
			'AgricultureBio.jpg',
			'Chocolat.png',
			'ChomeursPasFaineants.png',
			'ConvergenceDesLuttes.png',
			'DogmeCadeaux.png',
			'EHPAD.jpg',
			'fermeturesClasses.jpg',
			'FonctionnairesActionnaires.png',
			'FraudeFiscale.png',
			'FricServicePublic.png',
			'HommageSoignants.png',
			'Hopitaux.jpg',
			'Hopitaux.png',
			'LaFeteAMacron-fermetures de classe.png',
			'LaFeteAMacron-forêt.png',
			'LaFeteAMacron-lepeupleunijamaisneseravaincu.png',
			'LaFeteAMacron-malàmonécole.png',
			'LaFeteAMacron-oligarchie.png',
			'LaFeteAMacron-privépublic.png',
			'LaFeteAMacron-égalitéfemmeshommes.png',
			'LoiAsileImmigration.jpg',
			'lycees.png',
			'medef.jpg',
			'MillionsMilliards.png',
			'MoyensEHPAD.png',
			'NDDL.png',
			'Oligarchie.jpg',
			'PlusBureSeraLaChute.png',
			'politiqueEnvironementale.jpg',
			'postiers.png',
			'Priv2.png',
			'Quartiers.png',
			'racisme.png',
			'Retraites.png',
			'Réfugiés.jpg',
			'SansDents.jpg',
			'servicesPublics.jpg',
			'societeEMancipatrice.jpg',
			'TransitionEcologique.jpg',
			'zad.jpg'
		];

		all1000reasons.forEach(reason => {
			this.props.storage.refFromURL(prefix1000reasons + reason)
				.getDownloadURL()
				.then(url => this.state.galleryImages.push({
						src: url,
						thumbnail: url,
						thumbnailWidth: 270,
						thumbnailHeight: 250
					})
				);
		});
	}

	render() {
		return (
			<div className="Media Page">
				<div className="Section">
					<div className="Section__title">
						<h1>Téléchargez vos affiches</h1>
					</div>
					<div className="affiches">
						<div className="affiche">
							<img src={this.state.PAFjpg}/>
							<a className="md-btn md-btn-raised" href={this.state.PAFjpg}
							   download="rmc" target="_blank">télécharger</a>
						</div>
						<div className="affiche">
							<img src={this.state.TUNjpg}/>
							<a className="md-btn md-btn-raised" href={this.state.TUNjpg}
							   download="rmc" target="_blank">télécharger</a>
						</div>
						<div className="affiche">
							<img src={this.state.LOUjpg}/>
							<a className="md-btn md-btn-raised" href={this.state.LOUjpg}
							   download="rmc" target="_blank">télécharger</a>
						</div>
						<div className="affiche">
							<img src={this.state.USIjpg}/>
							<a className="md-btn md-btn-raised" href={this.state.USIjpg}
							   download="rmc" target="_blank">télécharger</a>
						</div>
						<div className="affiche">
							<img src={this.state.POPjpg}/>
							<a className="md-btn md-btn-raised" href={this.state.POPjpg}
							   download="rmc" target="_blank">télécharger</a>
						</div>
						<div className="affiche">
							<img src={this.state.RPAjpg}/>
							<a className="md-btn md-btn-raised" href={this.state.RPAjpg}
							   download="rmc" target="_blank">télécharger</a>
						</div>
					</div>
				</div>

				<div className="nos1000raisons Section">
					<div className="Section__title">
						<h1>1000 raisons de faire sa fête à Macron</h1>
					</div>
					<div className="gallery">
						<Gallery images={this.state.galleryImages}></Gallery>
					</div>
				</div>
			</div>
		);
	}
}

export default Media;

