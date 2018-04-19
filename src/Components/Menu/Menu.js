import React, {Component} from 'react';
import { Link } from "react-router-dom";
import './Menu.scss';

class Menu extends Component {

	render () {
		return (
            <div className="Menu">
                <Link to="/" className="Menu__link waves-effect waves-light btn">
                    Infos
                </Link>
                <Link to="/comites" className="Menu__link waves-effect waves-light btn">
                    Comités
                </Link>
                {/*<Link to="/media" className="Menu__link waves-effect waves-light btn">
                    Affiches
                </Link>*/}
            </div>
		);
	}
}

export default Menu;

