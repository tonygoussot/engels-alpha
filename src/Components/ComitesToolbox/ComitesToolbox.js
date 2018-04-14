import React, {Component} from 'react';
import ScrollableAnchor from 'react-scrollable-anchor';

import './ComitesToolbox.scss';

class ComitesToolbox extends Component {

	constructor (props) {
		super(props);
		this.state = {
			RMCjpg: '',
			RMCpdf: '',
			RR1jpg: '',
			RR1pdf: '',
			VMCjpg: '',
			VMCpdf: '',
			VR1jpg: '',
			VR1pdf: ''
		};
	}

	componentDidMount () {
		if (this.props.width && this.props.width !== this.state.frameRes.w) {
			this.setIframeSize(this.props.width);
		}

		if (this.props.width && this.props.width !== this.state.width) {
			this.setElementsWidth(this.props.width);
		}

		const refRMCjpg = this.props.storage.refFromURL('gs://lafeteamacron.appspot.com/comites/R Monter Comite.jpg');
		const refRMCpdf = this.props.storage.refFromURL('gs://lafeteamacron.appspot.com/comites/R Monter Comite.pdf');
		const refRR1jpg = this.props.storage.refFromURL('gs://lafeteamacron.appspot.com/comites/R Reunion 1.jpg');
		const refRR1pdf = this.props.storage.refFromURL('gs://lafeteamacron.appspot.com/comites/R Reunion 1.pdf');
		const refVMCjpg = this.props.storage.refFromURL('gs://lafeteamacron.appspot.com/comites/V Monter Comite.jpg');
		const refVMCpdf = this.props.storage.refFromURL('gs://lafeteamacron.appspot.com/comites/V Monter Comite.pdf');
		const refVR1jpg = this.props.storage.refFromURL('gs://lafeteamacron.appspot.com/comites/V Reunion 1.jpg');
		const refVR1pdf = this.props.storage.refFromURL('gs://lafeteamacron.appspot.com/comites/V Reunion 1.pdf');

		// Rouge
		refRMCjpg.getDownloadURL().then(url => this.setState({RMCjpg: url}));
		refRMCpdf.getDownloadURL().then(url => this.setState({RMCpdf: url}));
		refRR1jpg.getDownloadURL().then(url => this.setState({RR1jpg: url}));
		refRR1pdf.getDownloadURL().then(url => this.setState({RR1pdf: url}));

		// Violet
		refVMCjpg.getDownloadURL().then(url => this.setState({VMCjpg: url}));
		refVMCpdf.getDownloadURL().then(url => this.setState({VMCpdf: url}));
		refVR1jpg.getDownloadURL().then(url => this.setState({VR1jpg: url}));
		refVR1pdf.getDownloadURL().then(url => this.setState({VR1pdf: url}));
	}

	render () {
		return (
			<div className="ComitesToolbox">
				<ScrollableAnchor id={'section-outils'}>
					<div className='ComitesToolbox__title'>
						<h1> La boîte à outils pour vous aider à monter votre propre comité! </h1>
					</div>
				</ScrollableAnchor>
				<div className="tools">
					<div className="docs">
						<div className="docs__red">
							<div className="doc doc__left">
								<img src={this.state.RMCjpg}/>
								<a className="md-btn md-btn-raised" href={this.state.RMCpdf}
								   download="rmc" target="_blank">télécharger</a>
							</div>
							<div className="doc doc__right">
								<img src={this.state.RR1jpg}/>
								<a className="md-btn md-btn-raised" href={this.state.RR1pdf}
								   download="rr1"  target="_blank">télécharger</a>
							</div>
						</div>
						<div className="docs__violet">
							<div className="doc doc__left">
								<img src={this.state.VMCjpg}/>
								<a className="md-btn md-btn-raised" href={this.state.VMCpdf}
								   download="vmc">télécharger</a>
							</div>
							<div className="doc doc__right">
								<img src={this.state.VR1jpg}/>
								<a className="md-btn md-btn-raised" href={this.state.VR1pdf}
								   download="vr1">télécharger</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default ComitesToolbox;