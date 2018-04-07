import React, {Component} from 'react';
import './Comite.scss'
import {calcRes} from "../../Helpers/calcRes";

class Comite extends Component {
	constructor (props) {
		super(props);
		this.setState({frameRes: {w: 0, h: 0}});
	}

	componentWillMount () {
		const resRatio    = 560 / 315;
		const screenWidth = window.outerWidth;
		this.setState(() => ({
			frameRes: calcRes(screenWidth, resRatio)
		}));
	}

	render () {
		return (
			<div className="Comite">
				
				<iframe src="https://www.google.com/maps/d/embed?mid=1LbB_kfMW6n_iKommVWPwmoLZELO6J0Vo"
				        width={this.state.frameRes.w}
				        height={this.state.frameRes.h}>
				</iframe>
			</div>
		);
	}
}

export default Comite;
