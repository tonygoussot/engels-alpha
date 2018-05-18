import React, {Component} from 'react';
import './Tutos.scss';

class Tutos extends Component {

	constructor (props) {
		super(props);
		this.state = {
			refs: ['A', 'B', 'C', 'D'],
		};
	}

	componentDidMount () {

		const refApdf = this.props.storage.refFromURL('gs://lafeteamacron.appspot.com/tutos/RLFAMA.pdf');
		const refBpdf = this.props.storage.refFromURL('gs://lafeteamacron.appspot.com/tutos/RLFAMB.pdf');
		const refCpdf = this.props.storage.refFromURL('gs://lafeteamacron.appspot.com/tutos/RLFAMC.pdf');
		const refDpdf = this.props.storage.refFromURL('gs://lafeteamacron.appspot.com/tutos/RLFAMD.pdf');

		const refAjpg = this.props.storage.refFromURL('gs://lafeteamacron.appspot.com/tutos/RLFAMA.jpg');
		const refBjpg = this.props.storage.refFromURL('gs://lafeteamacron.appspot.com/tutos/RLFAMB.jpg');
		const refCjpg = this.props.storage.refFromURL('gs://lafeteamacron.appspot.com/tutos/RLFAMC.jpg');
		const refDjpg = this.props.storage.refFromURL('gs://lafeteamacron.appspot.com/tutos/RLFAMD.jpg');

		refAjpg.getDownloadURL().then(url => this.setState({'Ajpg': url}));
		refBjpg.getDownloadURL().then(url => this.setState({'Bjpg': url}));
		refCjpg.getDownloadURL().then(url => this.setState({'Cjpg': url}));
		refDjpg.getDownloadURL().then(url => this.setState({'Djpg': url}));

		refApdf.getDownloadURL().then(url => this.setState({'Apdf': url}));
		refBpdf.getDownloadURL().then(url => this.setState({'Bpdf': url}));
		refCpdf.getDownloadURL().then(url => this.setState({'Cpdf': url}));
		refDpdf.getDownloadURL().then(url => this.setState({'Dpdf': url}));
	}

	render () {
		return (
			<div className="Tutos">
				<div className="Page__title">
					<h1>Découvrez les recettes de la Fête à Macron pour une manif festive !</h1>
				</div>
				<div className="tuto-video">
					<iframe width="560" height="315"
					        src="https://www.youtube.com/embed/k17W8bm4Y0c"
					        frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
				</div>
				<div className="affiches">
					{
						Object.values(this.state.refs).map((ref) => (
							<div className="affiche">
								<img src={this.state[`${ref}jpg`]}/>
								<a className="md-btn md-btn-raised" href={this.state[`${ref}pdf`]}
								   download="rmc" target="_blank">Télécharger</a>
							</div>
						))
					}
				</div>
			</div>
		);
	}
}

export default Tutos;
