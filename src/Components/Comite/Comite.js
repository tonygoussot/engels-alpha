import React, {Component} from 'react';
import './Comite.scss'
import {calcRes} from "../../Helpers/calcRes";

class Comite extends Component {
	constructor (props) {
		super(props);
		this.state = {frameRes: {w: 0, h: 0}};
	}

	componentWillMount () {
		const resRatio    = 1.7;
		const screenWidth = window.screen.availWidth;
		this.setState(() => ({
			frameRes: calcRes(screenWidth, resRatio)
		}));
	}

	render () {
		return (
			<div className="Comite">
				<div className='Comite__title'>
					<h1> Trouvez votre comité local sur notre carte interactive </h1>
					<span> Il n'existe pas encore ? Créez-le ! </span>
				</div>
				<iframe src="https://www.google.com/maps/d/embed?mid=1LbB_kfMW6n_iKommVWPwmoLZELO6J0Vo"
				        width={this.state.frameRes.w}
				        height={this.state.frameRes.h}>
				</iframe>
			</div>
		);
	}
}

export default Comite;
