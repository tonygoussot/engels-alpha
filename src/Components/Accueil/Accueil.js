import React, {Component} from 'react';
import Intro from "./../Intro/Intro";
import Comite from "./../Comite/Comite";
import Bulletin from "./../Bulletin/Bulletin";
import './Accueil.scss';

class Accueil extends Component {
    constructor (props) {
        super(props);
        this.state = props;
    }

	render () {
		return (

            <div className="Accueil">


                {/*<blockquote class="twitter-video" data-lang="fr">
					<p lang="fr" dir="ltr">Artiste engagée,
					<a href="https://twitter.com/hashtag/CorinneMasiero?src=hash&amp;ref_src=twsrc%5Etfw">#CorinneMasiero</a>
					 ?
					<br/>Visiblement oui ! ✊ <a href="https://twitter.com/hashtag/C%C3%A0Vous?src=hash&amp;ref_src=twsrc%5Etfw">#CàVous</a>
					<a href="https://t.co/YFCYKh0RBe">pic.twitter.com/YFCYKh0RBe</a>
				  </p>&mdash; C à vous (@cavousf5)
					<a href="https://twitter.com/cavousf5/status/984121370178138113?ref_src=twsrc%5Etfw">
					11 avril 2018
				</a>
				</blockquote>
				<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>*/}



                <Intro storage={this.state.storage} width={this.state.width}/>
                <Bulletin width={this.state.width}/>
                <Comite storage={this.state.storage} width={this.state.width}/>
            </div>
		);
	}
}

export default Accueil;

