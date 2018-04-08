import React, {Component} from 'react';
import './Bulletin.scss'
import {calcRes} from "../../Helpers/calcRes";

class Bulletin extends Component {
	constructor (props) {
		super(props);
		this.state         = {
			videoRes: {w: 0, h: 0},
			elemWidth: props.width
		};
		this.setIframeSize = this.setIframeSize.bind(this);
	}

	setElementsWidth (width) {
		this.setState({elemWidth: width});
	}

	setIframeSize (newWidth) {
		const resRatio = 560 / 315;
		this.setState({
			videoRes: calcRes(newWidth, resRatio, 800)
		});
	}

	componentWillMount () {
		this.setIframeSize(this.props.width);
		this.setElementsWidth(this.props.width);
	}

	componentWillReceiveProps (nextProps) {
		if (nextProps.width && nextProps.width !== this.state.videoRes.w) {
			this.setIframeSize(nextProps.width);
		}
		if (nextProps.width && nextProps.width !== this.state.width) {
			this.setElementsWidth(nextProps.width);
		}
	}

	render () {
		return (
			<div className="Bulletin" style={{width: this.state.elemWidth}}>
				<iframe width={Math.round(this.state.videoRes.w)} height={Math.round(this.state.videoRes.h)}
				        src="https://www.youtube.com/embed/PJPi49pqDt8?rel=0"
				        frameBorder="0"
				        allow="autoplay; encrypted-media" allowFullScreen></iframe>
			</div>
		);
	}
}

export default Bulletin;

