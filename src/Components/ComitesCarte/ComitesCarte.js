import React, {Component} from 'react';
import ScrollableAnchor from 'react-scrollable-anchor';

import './ComitesCarte.scss';

class ComitesCarte extends Component {

    render () {
        return (
            <div className="ComitesCarte">
				<ScrollableAnchor id={'section-trouver'}>
					<div className='ComitesCarte__title'>
						<h1> Trouvez votre comité local sur la carte interactive </h1>
						<h2> créée par <a href="https://discord-debout.fr/">Discord debout</a> </h2>
					</div>
				</ScrollableAnchor>
				<div className="ComitesCarte__map">
					<iframe src="https://www.google.com/maps/d/embed?mid=1LbB_kfMW6n_iKommVWPwmoLZELO6J0Vo"
							style={{height: "90vh", width: "90vw"}}>
					</iframe>
				</div>
            </div>
        );
    }
}

export default ComitesCarte;

