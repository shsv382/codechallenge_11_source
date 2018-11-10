import React, { Component } from 'react';

class InfoArticle extends Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		const article = document.querySelectorAll("article.info-unit")[this.props.index];
		const unitEmersion= this.props.unitEmersion;
		const scrollEmersion = this.props.scrollEmersion;
	    scrollEmersion(article, unitEmersion);
	}

	render () {
		let title = this.props.title;
		let description = this.props.description;
		return (
	        <article className={`info-unit${this.props.index % 2 === 0 ? ' grow-users' : ''}`}>
	        	<aside>
	            	<img src={require('../images/illustration-' + title.toLowerCase().split(" ").join("-") + '.svg')} alt="title" />
	        	</aside>
	        	<section>
	            	<h2>
	              		{ title }
	            	</h2>
	            		{ description }
	           	</section>
	        </article>
		)
	}
}

export default InfoArticle;