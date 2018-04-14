import React, {Component} from 'react';
import { Link } from "react-router-dom";
import './Menu.scss';

class Menu extends Component {

	render () {
		return (
            <div className="Menu">
                <Link to="/" className="Menu__link waves-effect waves-light btn">
                    Accueil
                </Link>
                <Link to="/comites" className="Menu__link waves-effect waves-light btn">
                    Tout sur les comités
                </Link>
                <Link to="/media" className="Menu__link waves-effect waves-light btn">
                    Les vidéos
                </Link>
            </div>
		);
	}
}

export default Menu;

