import React from 'react';

const AnchorButton = (props) => {
	return (
		<a href={ props.href } className={ "btn btn-" + props.type }>
			{ props.children }
		</a>
	);
}

export default AnchorButton;