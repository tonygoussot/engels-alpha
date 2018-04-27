import React, {Component} from 'react';
import '../Media/Media.scss';

class Tracts extends Component {

	constructor (props) {
		super(props);
		this.state = {
			T5M1: '',
			T5M2: '',
			T5M3: '',
			T5M4: '',
			T5M1A: '',
			T5M1B: '',
			T5M2A: '',
			T5M2B: '',
			T5M3A: '',
			T5M3B: '',
			T5M4A: '',
			T5M4B: '',
		};
	}

	componentDidMount () {
		const refT5M1jpg  = this.props.storage.refFromURL('gs://lafeteamacron.appspot.com/tracts/T5M1.pdf');
		const refT5M2jpg  = this.props.storage.refFromURL('gs://lafeteamacron.appspot.com/tracts/T5M2.pdf');
		const refT5M3jpg  = this.props.storage.refFromURL('gs://lafeteamacron.appspot.com/tracts/T5M3.pdf');
		const refT5M4jpg  = this.props.storage.refFromURL('gs://lafeteamacron.appspot.com/tracts/T5M4.pdf');
		const refT5M1Apng = this.props.storage.refFromURL('gs://lafeteamacron.appspot.com/tracts/T5M1A.png');
		const refT5M1Bpng = this.props.storage.refFromURL('gs://lafeteamacron.appspot.com/tracts/T5M1B.png');
		const refT5M2Apng = this.props.storage.refFromURL('gs://lafeteamacron.appspot.com/tracts/T5M2A.png');
		const refT5M2Bpng = this.props.storage.refFromURL('gs://lafeteamacron.appspot.com/tracts/T5M2B.png');
		const refT5M3Apng = this.props.storage.refFromURL('gs://lafeteamacron.appspot.com/tracts/T5M3A.png');
		const refT5M3Bpng = this.props.storage.refFromURL('gs://lafeteamacron.appspot.com/tracts/T5M3B.png');
		const refT5M4Apng = this.props.storage.refFromURL('gs://lafeteamacron.appspot.com/tracts/T5M4A.png');
		const refT5M4Bpng = this.props.storage.refFromURL('gs://lafeteamacron.appspot.com/tracts/T5M4B.png');

		refT5M1jpg.getDownloadURL().then(url => this.setState({T5M1: url}));
		refT5M2jpg.getDownloadURL().then(url => this.setState({T5M2: url}));
		refT5M3jpg.getDownloadURL().then(url => this.setState({T5M3: url}));
		refT5M4jpg.getDownloadURL().then(url => this.setState({T5M4: url}));
		refT5M1Apng.getDownloadURL().then(url => this.setState({T5M1A: url}));
		refT5M1Bpng.getDownloadURL().then(url => this.setState({T5M1B: url}));
		refT5M2Apng.getDownloadURL().then(url => this.setState({T5M2A: url}));
		refT5M2Bpng.getDownloadURL().then(url => this.setState({T5M2B: url}));
		refT5M3Apng.getDownloadURL().then(url => this.setState({T5M3A: url}));
		refT5M3Bpng.getDownloadURL().then(url => this.setState({T5M3B: url}));
		refT5M4Apng.getDownloadURL().then(url => this.setState({T5M4A: url}));
		refT5M4Bpng.getDownloadURL().then(url => this.setState({T5M4B: url}));
	}

	render () {
		return (
			<div className="Media">
				<div className="Page__title">
					<h1>Téléchargez vos Tracts</h1>
				</div>
				<div className="affiches">
					<div className="affiche">
						<img src={this.state.T5M1A}/>
						<img src={this.state.T5M1B}/>
						<a className="md-btn md-btn-raised" href={this.state.T5M1}
						   download="rmc" target="_blank">télécharger</a>
					</div>

					<div className="affiche">
						<img src={this.state.T5M4A}/>
						<img src={this.state.T5M4B}/>
						<a className="md-btn md-btn-raised" href={this.state.T5M4}
						   download="rmc" target="_blank">télécharger</a>
					</div>

					<div className="affiche">
						<img src={this.state.T5M2A}/>
						<img src={this.state.T5M2B}/>
						<a className="md-btn md-btn-raised" href={this.state.T5M2}
						   download="rmc" target="_blank">télécharger</a>
					</div>

					<div className="affiche">
						<img src={this.state.T5M3A}/>
						<img src={this.state.T5M3B}/>
						<a className="md-btn md-btn-raised" href={this.state.T5M3}
						   download="rmc" target="_blank">télécharger</a>
					</div>
				</div>
			</div>
		);
	}
}

export default Tracts;

