import React, { Component } from 'react';
import './Header.scss';

class Header extends Component {
	constructor (props) {
		super(props);
		this.state = {
			titleLogo: '',
		};
	}
	componentDidMount () {
		const titleLogo = this.props.storage.refFromURL('gs://lafeteamacron.appspot.com/logo (1).png');
		titleLogo.getDownloadURL().then(url => this.setState({'titleLogo': url}));
	}
	render() {
		return (
				<header className="Header-header">
					<img className="Header-logo" src={this.state.titleLogo}/>
					<p className="Header-sub">
						Rendez-vous le
						<span className="Header-sub__hour"> 26 Mai !</span>
					</p>
				</header>
		);
	}
}

export default Header;
