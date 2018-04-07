import React, {Component} from 'react';
import './Intro.scss';
import Manifeste from './Manifeste.js';

class Intro extends Component {
	render () {
		return (
			<div className="Intro">

				<div className="col-one">
					<div className="fb-video Intro-video card"
					     data-href="https://www.facebook.com/lafeteamacron/videos/2031186810482075/"
					     data-width="400"
					     data-show-text="false">
					</div>

					<div className="Intro-networks card">
						<div className="Intro-manifeste__title">
							MOBILISONS-NOUS !
							<div className="facebook--link">
								<i className="fab fa-facebook-square"></i>
								<span> Rejoignez le mouvement </span>
							</div>
							<div>
								<i className="fab fa-twitter-square"></i>
								<span> Suivez l'actualité twitter </span>
							</div>
						</div>
					</div>

					<div className="Intro-networks card">
						<div className="Intro-manifeste__title ">
							LE TRACT AUX CHEMINOT•E•S
						</div>
					</div>

					{/*<a className="twitter-timeline card"
					   data-width="400"
					   data-height="600"
					   data-theme="light"
					   data-link-color="#E81C4F"
					   href="https://twitter.com/LaFeteaMacron">
						Tweets by TwitterDev
					</a>*/}
				</div>

				<div className="col-two">
					<div className="Intro-manifeste card">
						<div className="Intro-manifeste__image card-image">
							<img src={"/poing-levé.jpg"} />
							<span className="card-title">LE MANIFESTE</span>
						</div>
						<div className="Intro-manifeste__texte card-content">
							<Manifeste />
						</div>
						<div className="Intro-manifeste__sign card-action">
							<a href={"https://www.change.org/p/le-peuple-appel-au-samedi-5-mai-faire-sa-f%C3%AAte-%C3%A0-macron"}
							   className="sign__button ">
								<i className="material-icons">assignment</i>
								<span> Je signe l'appel </span>
							</a>
						</div>
					</div>
				</div>

			</div>
		);
	}
}

export default Intro;
