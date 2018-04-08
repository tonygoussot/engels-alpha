import React, {Component} from 'react';
import './Comite.scss'
import {calcRes} from "../../Helpers/calcRes";

class Comite extends Component {
	constructor (props) {
		super(props);
		this.state         = {
			frameRes: {w: 0, h: 0},
			elemWidth: props.width
		};
		this.setIframeSize = this.setIframeSize.bind(this);
	}

	setElementsWidth (width) {
		this.setState({elemWidth: width});
	}

	setIframeSize (newWidth) {
		const resRatio = 16 / 9;
		this.setState(() => ({
			frameRes: calcRes(newWidth, resRatio)
		}));
	}

	componentWillMount () {
		this.setIframeSize(this.props.width);
		this.setElementsWidth(this.props.width);
	}

	componentWillReceiveProps (nextProps) {
		if (nextProps.width && nextProps.width !== this.state.frameRes.w) {
			this.setIframeSize(nextProps.width);
		}
		if (nextProps.width && nextProps.width !== this.state.width) {
			this.setElementsWidth(nextProps.width);
		}
	}

	render () {
		return (
			<div className="Comite"
			     style={{width: this.state.elemWidth}}>
				<div className='Comite__title'>
					<h1> Trouvez votre comité local sur notre carte interactive </h1>

					<div className="contact">
						<a className="contact__link"
						   href="mailto:comitefeteamacron@gmail.com">
							<span> Vous ne trouvez pas de comité ? Créez-le et contactez nous : comitefeteamacron@gmail.com </span>
						</a>
					</div>

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
