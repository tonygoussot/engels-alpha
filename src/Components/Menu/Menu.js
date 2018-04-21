import React, {Component} from 'react';
import {Link} from "react-router-dom";
import './Menu.scss';

class Menu extends Component {

	render () {
		return (
			<div className="Menu">
				<Link to="/" className="Menu__link waves-effect waves-light btn">
					Infos
				</Link>
				<Link to="/comites" className="Menu__link waves-effect waves-light btn">
					Votre Comité
				</Link>
				<Link to="/media" className="Menu__link waves-effect waves-light btn">
					Affiches
				</Link>
				<Link to="/tracts" className="Menu__link waves-effect waves-light btn">
					Tracts
				</Link>
				{/*<Link to="/tracts" className="Menu__link waves-effect waves-light btn">
					Venir le 5 mai
				</Link>*/}
				<Link to="/nos1000raisons" className="Menu__link waves-effect waves-light btn">
					Nos 1000 raisons
				</Link>
			</div>
		);
	}
}

export default Menu;

