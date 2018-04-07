import React, {Component} from 'react';
import './Bulletin.scss'
import {calcRes} from "../../Helpers/calcRes";

class Bulletin extends Component {
	constructor (props) {
		super(props);
		this.setState({videoRes: {w: 0, h: 0}});
	}

	componentWillMount () {
		const resRatio    = 560 / 315;
		const screenWidth = window.outerWidth;
		this.setState(() => ({
			videoRes: calcRes(screenWidth, resRatio, 800)
		}));
	}

	render () {
		return (
			<div className="Bulletin">
				<iframe width={this.state.videoRes.w} height={this.state.videoRes.h}
				        src="https://www.youtube.com/embed/PJPi49pqDt8?rel=0"
				        frameborder="0"
				        allow="autoplay; encrypted-media" allowfullscreen></iframe>
			</div>
		);
	}
}

export default Bulletin;

