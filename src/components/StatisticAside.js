import React, { Component } from 'react';

class StatisticAside extends Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		const aside = document.querySelectorAll(".statistic-unit aside")[this.props.index];
		const unitEmersion= this.props.unitEmersion;
		const scrollEmersion = this.props.scrollEmersion;
	    scrollEmersion(aside, unitEmersion);
	}

	render () {
		let title = this.props.title;
		let number = this.props.number;
		let description = this.props.description;
		return (
			<aside>
		        <div align="left">
	        	    <img src={require('../images/icon-' + title.toLowerCase() + '.svg')} alt={ title } />
		        </div>
		        <p className="statistic">{ number }</p>
	            <p className="unit">{ description }</p>
	        </aside>
		)
	}
}

export default StatisticAside;