import React, {Component} from 'react';
import './Comites.scss';
import ComitesCarte from "../ComitesCarte/ComitesCarte";
import ComitesToolbox from "../ComitesToolbox/ComitesToolbox";

class Comites extends Component {
	constructor (props) {
		super(props);
		this.state = props;
	}

    render () {
        return (
            <div className="Comites">
                <div className="Comites__title">
                    <h1> Tout sur les comités de la Fête à Macron </h1>
                    <h2> Trouvez, créez, animez votre comité </h2>
                </div>
				<div className='Comite__title2 tellus'>
					<span> Prévenez nous au comitefeteamacron@gmail.com !</span>
				</div>
                <ComitesCarte/>
                <ComitesToolbox storage={this.state.storage}/>

            </div>
        );
    }
}

export default Comites;

