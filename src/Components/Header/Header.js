import React, { Component } from 'react';
import './Header.scss';

class Header extends Component {
	render() {
		return (
				<header className="Header-header">
					<h1 className="Header-title">La Fête à Macron !</h1>
					<p className="Header-sub">
						<span className="Header-sub__hour">12h</span> Louvre - <span className="Header-sub__hour">14h</span> Opéra
					</p>
				</header>
		);
	}
}

export default Header;
