import React, { Component } from 'react';
import AnchorButton from './AnchorButton';

class EndArticle extends Component {	
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		const article = document.getElementsByClassName("end-article")[0];
	    article.style.opacity = 0;
	    const unitEmersion = this.props.unitEmersion;
	    const scrollEmersion = this.props.scrollEmersion;
	    scrollEmersion(article, unitEmersion);
	}

	render() {
		return (	
			<article className="main-article end-article">
	          <h1>
	            Ready To Build Your Community?
	          </h1>
	          <AnchorButton href="#" type="primary" >Get Started For Free</AnchorButton>
	        </article>
	    );
	}
}

export default EndArticle;