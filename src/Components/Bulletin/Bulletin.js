import React, {Component} from 'react';
import './Bulletin.scss'
import {calcRes} from "../../Helpers/calcRes";

class Bulletin extends Component {
	constructor (props) {
		super(props);
		this.state = {videoRes: {w: 0, h: 0}};
	}

	componentWillMount () {
		const resRatio    = 560 / 315;
		const screenWidth = window.screen.availWidth;
		this.setState(() => ({
			videoRes: calcRes(screenWidth, resRatio, 800)
		}));
	}

	render () {
		return (
			<div className="Bulletin">
				<iframe width={this.state.videoRes.w} height={this.state.videoRes.h}
				        src="https://www.youtube.com/embed/PJPi49pqDt8?rel=0"
				        frameBorder="0"
				        allow="autoplay; encrypted-media" allowFullScreen></iframe>
			</div>
		);
	}
}

export default Bulletin;

