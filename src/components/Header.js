import React, { Component } from 'react';
import AnchorButton from './AnchorButton';

class Header extends Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		const header = document.getElementsByTagName("header")[0];
	    header.style.opacity = 0;
	    const unitEmersion = this.props.unitEmersion;
	    const timer = setTimeout(function() {
	    	unitEmersion(header, 300);
	    }, 800);
	}

	render() {
		return (
			<header>
	          <img src={require('../images/logo.svg')} alt="Huddle" />
	          <AnchorButton href="#" type="small" >Try it free!</AnchorButton>
	        </header>
		);
	}
}

export default Header;