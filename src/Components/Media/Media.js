import React, {Component} from 'react';
import './Media.scss';

class Media extends Component {

	constructor (props) {
		super(props);
		this.state = {
			refs: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
			'0png': '',
			'1png': '',
			'2png': '',
			'3png': '',
			'4png': '',
			'5png': '',
			'6png': '',
			'7png': '',
			'8png': '',
			'9png': '',
			'0pdf': '',
			'1pdf': '',
			'2pdf': '',
			'3pdf': '',
			'4pdf': '',
			'5pdf': '',
			'6pdf': '',
			'7pdf': '',
			'8pdf': '',
			'9pdf': '',
		};
	}

	componentDidMount () {
		const ref0png = this.props.storage.refFromURL('gs://lafeteamacron.appspot.com/affiches/MonsieurAlfred_le5mai 0.png');
		const ref1png = this.props.storage.refFromURL('gs://lafeteamacron.appspot.com/affiches/MonsieurAlfred_le5mai 1.png');
		const ref2png = this.props.storage.refFromURL('gs://lafeteamacron.appspot.com/affiches/MonsieurAlfred_le5mai 2.png');
		const ref3png = this.props.storage.refFromURL('gs://lafeteamacron.appspot.com/affiches/MonsieurAlfred_le5mai 3.png');
		const ref4png = this.props.storage.refFromURL('gs://lafeteamacron.appspot.com/affiches/MonsieurAlfred_le5mai 4.png');
		const ref5png = this.props.storage.refFromURL('gs://lafeteamacron.appspot.com/affiches/MonsieurAlfred_le5mai 5.png');
		const ref6png = this.props.storage.refFromURL('gs://lafeteamacron.appspot.com/affiches/MonsieurAlfred_le5mai 6.png');
		const ref7png = this.props.storage.refFromURL('gs://lafeteamacron.appspot.com/affiches/MonsieurAlfred_le5mai 7.png');
		const ref8png = this.props.storage.refFromURL('gs://lafeteamacron.appspot.com/affiches/MonsieurAlfred_le5mai 8.png');
		const ref9png = this.props.storage.refFromURL('gs://lafeteamacron.appspot.com/affiches/MonsieurAlfred_le5mai 9.png');

		const ref0pdf = this.props.storage.refFromURL('gs://lafeteamacron.appspot.com/affiches/vectorise/MonsieurAlfred_le5mai-vectoriel 0.pdf');
		const ref1pdf = this.props.storage.refFromURL('gs://lafeteamacron.appspot.com/affiches/vectorise/MonsieurAlfred_le5mai-vectoriel 1.pdf');
		const ref2pdf = this.props.storage.refFromURL('gs://lafeteamacron.appspot.com/affiches/vectorise/MonsieurAlfred_le5mai-vectoriel 2.pdf');
		const ref3pdf = this.props.storage.refFromURL('gs://lafeteamacron.appspot.com/affiches/vectorise/MonsieurAlfred_le5mai-vectoriel 3.pdf');
		const ref4pdf = this.props.storage.refFromURL('gs://lafeteamacron.appspot.com/affiches/vectorise/MonsieurAlfred_le5mai-vectoriel 4.pdf');
		const ref5pdf = this.props.storage.refFromURL('gs://lafeteamacron.appspot.com/affiches/vectorise/MonsieurAlfred_le5mai-vectoriel 5.pdf');
		const ref6pdf = this.props.storage.refFromURL('gs://lafeteamacron.appspot.com/affiches/vectorise/MonsieurAlfred_le5mai-vectoriel 6.pdf');
		const ref7pdf = this.props.storage.refFromURL('gs://lafeteamacron.appspot.com/affiches/vectorise/MonsieurAlfred_le5mai-vectoriel 7.pdf');
		const ref8pdf = this.props.storage.refFromURL('gs://lafeteamacron.appspot.com/affiches/vectorise/MonsieurAlfred_le5mai-vectoriel 8.pdf');
		const ref9pdf = this.props.storage.refFromURL('gs://lafeteamacron.appspot.com/affiches/vectorise/MonsieurAlfred_le5mai-vectoriel 9.pdf');

		ref0png.getDownloadURL().then(url => this.setState({'0png': url}));
		ref1png.getDownloadURL().then(url => this.setState({'1png': url}));
		ref2png.getDownloadURL().then(url => this.setState({'2png': url}));
		ref3png.getDownloadURL().then(url => this.setState({'3png': url}));
		ref4png.getDownloadURL().then(url => this.setState({'4png': url}));
		ref5png.getDownloadURL().then(url => this.setState({'5png': url}));
		ref6png.getDownloadURL().then(url => this.setState({'6png': url}));
		ref7png.getDownloadURL().then(url => this.setState({'7png': url}));
		ref8png.getDownloadURL().then(url => this.setState({'8png': url}));
		ref9png.getDownloadURL().then(url => this.setState({'9png': url}));

		ref0pdf.getDownloadURL().then(url => this.setState({'0pdf': url}));
		ref1pdf.getDownloadURL().then(url => this.setState({'1pdf': url}));
		ref2pdf.getDownloadURL().then(url => this.setState({'2pdf': url}));
		ref3pdf.getDownloadURL().then(url => this.setState({'3pdf': url}));
		ref4pdf.getDownloadURL().then(url => this.setState({'4pdf': url}));
		ref5pdf.getDownloadURL().then(url => this.setState({'5pdf': url}));
		ref6pdf.getDownloadURL().then(url => this.setState({'6pdf': url}));
		ref7pdf.getDownloadURL().then(url => this.setState({'7pdf': url}));
		ref8pdf.getDownloadURL().then(url => this.setState({'8pdf': url}));
		ref9pdf.getDownloadURL().then(url => this.setState({'9pdf': url}));
	}

	render () {
		return (
			<div className="Media">
				<div className="Page__title">
					<h1>Téléchargez vos affiches</h1>
					<p>Tous les fichiers proposés sont au format vectoriel - pdf</p>
				</div>
				<div className="affiches">
					{
						Object.keys(this.state.refs).map((ref) => (
							<div className="affiche">
								<img src={this.state[`${ref}png`]}/>
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

export default Media;

