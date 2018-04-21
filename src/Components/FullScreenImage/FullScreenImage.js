import React, {Component} from "react";
import './FullScreenImage.scss';

class FullScreenImage extends Component {
	constructor(props) {
		super(props);

		this.state = {
			image: this.props.image
		};
	}

	componentWillReceiveProps(nextProps) {
		this.setState({image: nextProps.image});
	}

	closeFullScreen() {
		this.setState({image: null});
	}

	render() {
		if(this.state.image) {
			return (
				<div className="Overlay" onClick={this.closeFullScreen.bind(this)}>
					<img className="Overlay__image" src={this.state.image.url} />
				</div>
			);
		}

		return null;
	}
}

export default FullScreenImage;