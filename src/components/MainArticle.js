import React, { Component } from 'react';
import AnchorButton from './AnchorButton';

class MainArticle extends Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		const article = document.getElementsByTagName("article")[0];
	    article.style.opacity = 0;
	    const unitEmersion = this.props.unitEmersion;
	    const scrollEmersion = this.props.scrollEmersion;
	    const timer = setTimeout(function() {
		    unitEmersion(article, 500);
	    }, 400);
	    const img = document.getElementsByTagName("img")[1];
	    scrollEmersion(img, unitEmersion);
	}

	render() {
		return (
			<article className="main-article">
	            <h1>
	              	Build The Community Your Fans Will Love
	            </h1>
	          	<section className="primary-desc">
		            <p>
		              	Huddle re-imagines the way we build communities. You have a voice, but so does 
		              	your audience. Create connections with your users as you engage in genuine discussion. 
		            </p>
	              	<AnchorButton href="#" type="primary" >Get Started For Free</AnchorButton>
	          	</section>
	          	<img src={require('../images/screen-mockups.svg')} alt="Mockups" id="mockups" />
	        </article>
		);
	}
}

export default MainArticle;