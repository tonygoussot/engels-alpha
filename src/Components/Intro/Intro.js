import React, {Component} from 'react';
import './Intro.scss';
import '../../Style/card.scss';
import {manifeste} from "./manifeste";

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
								<i class="fab fa-facebook-square"></i>
								<span> Rejoignez le mouvement </span>
							</div>
							<div>
								<i class="fab fa-twitter-square"></i>
								<span> Suivez l'actualité twitter </span>
							</div>
						</div>
					</div>
					<div className="Intro-networks card">
						<div className="Intro-manifeste__title ">
							LE TRACT AUX CHEMINOT•E•S
						</div>
					</div>
					<a class="twitter-timeline card"
					   data-width="400"
					   data-height="600"
					   data-theme="light"
					   data-link-color="#E81C4F"
					   href="https://twitter.com/LaFeteaMacron">
						Tweets by TwitterDev
					</a>
				</div>

				<div className="col-two">
					<div className="Intro-manifeste card">
						<div className="Intro-manifeste__image card-image">
						</div>
						<div className="Intro-manifeste__title card-title">
							LE MANIFESTE
						</div>
						<div className="Intro-manifeste__texte card-content">
							{manifeste}
						</div>
						<div className="Intro-manifeste__sign">
							<a href={"https://www.change.org/p/le-peuple-appel-au-samedi-5-mai-faire-sa-f%C3%AAte-%C3%A0-macron"}
							   className="sign__button ">
								<i className="material-icons">assignment</i>
								<span> Je signe l'appel </span>
							</a>
						</div>
					</div>
					<iframe width="560" height="315" src="https://www.youtube.com/embed/PJPi49pqDt8?rel=0" frameborder="0"
					        allow="autoplay; encrypted-media" allowfullscreen></iframe>
				</div>

			</div>
		);
	}
}

export default Intro;
