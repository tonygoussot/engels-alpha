import React, {Component} from 'react';
import './Media.scss';

class Media extends Component {

	constructor (props) {
		super(props);
		this.state = {
			PAFjpg: '',
			TUNjpg: '',
			LOUjpg: '',
			USIjpg: '',
			POPjpg: '',
			RPAjpg: ''
		};
	}

	componentDidMount () {
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
	}

	render () {
		return (
			<div className="Media">
				<div className="Page__title">
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
		);
	}
}

export default Media;

