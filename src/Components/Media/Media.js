import React, {Component} from 'react';
import './Media.scss';

class Media extends Component {

	constructor (props) {
		super(props);
		this.state = {
			refs: ['U', 'Z', 'A', 'B', 'C', 'D', 6, 7, 8, 9],
		};
	}

	componentDidMount () {

		const ref6png = this.props.storage.refFromURL('gs://lafeteamacron.appspot.com/affiches/MonsieurAlfred_le5mai 6.png');
		const ref7png = this.props.storage.refFromURL('gs://lafeteamacron.appspot.com/affiches/MonsieurAlfred_le5mai 7.png');
		const ref8png = this.props.storage.refFromURL('gs://lafeteamacron.appspot.com/affiches/MonsieurAlfred_le5mai 8.png');
		const ref9png = this.props.storage.refFromURL('gs://lafeteamacron.appspot.com/affiches/MonsieurAlfred_le5mai 9.png');

		const ref6pdf = this.props.storage.refFromURL('gs://lafeteamacron.appspot.com/affiches/vectorise/MonsieurAlfred_le5mai-vectoriel 6.pdf');
		const ref7pdf = this.props.storage.refFromURL('gs://lafeteamacron.appspot.com/affiches/vectorise/MonsieurAlfred_le5mai-vectoriel 7.pdf');
		const ref8pdf = this.props.storage.refFromURL('gs://lafeteamacron.appspot.com/affiches/vectorise/MonsieurAlfred_le5mai-vectoriel 8.pdf');
		const ref9pdf = this.props.storage.refFromURL('gs://lafeteamacron.appspot.com/affiches/vectorise/MonsieurAlfred_le5mai-vectoriel 9.pdf');

		const refApdf = this.props.storage.refFromURL('gs://lafeteamacron.appspot.com/affiches/26/LFAM26A.pdf');
		const refBpdf = this.props.storage.refFromURL('gs://lafeteamacron.appspot.com/affiches/26/LFAM26B.pdf');
		const refCpdf = this.props.storage.refFromURL('gs://lafeteamacron.appspot.com/affiches/26/LFAM26C.pdf');
		const refDpdf = this.props.storage.refFromURL('gs://lafeteamacron.appspot.com/affiches/26/LFAM26D.pdf');
		const refUpdf = this.props.storage.refFromURL('gs://lafeteamacron.appspot.com/affiches/26/LFAM26U.pdf');
		const refZpdf = this.props.storage.refFromURL('gs://lafeteamacron.appspot.com/affiches/26/LFAM26Z.pdf');

		const refApng = this.props.storage.refFromURL('gs://lafeteamacron.appspot.com/affiches/26/LFAM26A.png');
		const refBpng = this.props.storage.refFromURL('gs://lafeteamacron.appspot.com/affiches/26/LFAM26B.png');
		const refCpng = this.props.storage.refFromURL('gs://lafeteamacron.appspot.com/affiches/26/LFAM26C.png');
		const refDpng = this.props.storage.refFromURL('gs://lafeteamacron.appspot.com/affiches/26/LFAM26D.png');
		const refUpng = this.props.storage.refFromURL('gs://lafeteamacron.appspot.com/affiches/26/LFAM26U.png');
		const refZpng = this.props.storage.refFromURL('gs://lafeteamacron.appspot.com/affiches/26/LFAM26Z.png');

		ref6png.getDownloadURL().then(url => this.setState({'6png': url}));
		ref7png.getDownloadURL().then(url => this.setState({'7png': url}));
		ref8png.getDownloadURL().then(url => this.setState({'8png': url}));
		ref9png.getDownloadURL().then(url => this.setState({'9png': url}));
		refApng.getDownloadURL().then(url => this.setState({'Apng': url}));
		refBpng.getDownloadURL().then(url => this.setState({'Bpng': url}));
		refCpng.getDownloadURL().then(url => this.setState({'Cpng': url}));
		refDpng.getDownloadURL().then(url => this.setState({'Dpng': url}));
		refUpng.getDownloadURL().then(url => this.setState({'Upng': url}));
		refZpng.getDownloadURL().then(url => this.setState({'Zpng': url}));

		ref6pdf.getDownloadURL().then(url => this.setState({'6pdf': url}));
		ref7pdf.getDownloadURL().then(url => this.setState({'7pdf': url}));
		ref8pdf.getDownloadURL().then(url => this.setState({'8pdf': url}));
		ref9pdf.getDownloadURL().then(url => this.setState({'9pdf': url}));
		refApdf.getDownloadURL().then(url => this.setState({'Apdf': url}));
		refBpdf.getDownloadURL().then(url => this.setState({'Bpdf': url}));
		refCpdf.getDownloadURL().then(url => this.setState({'Cpdf': url}));
		refDpdf.getDownloadURL().then(url => this.setState({'Dpdf': url}));
		refUpdf.getDownloadURL().then(url => this.setState({'Updf': url}));
		refZpdf.getDownloadURL().then(url => this.setState({'Zpdf': url}));
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
						Object.values(this.state.refs).map((ref) => (
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
