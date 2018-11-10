import React from 'react';
import { unitsArray } from './info-units';
import InfoArticle from './InfoArticle';

const InfoUnit = (props) => {
		const articles = unitsArray.map((unit, i) => {
			return (<InfoArticle 
				title={unit.title}
				description={unit.description}
				scrollEmersion={props.scrollEmersion}
				unitEmersion={props.unitEmersion} 
				index={i}
				key={`IA-key-${i}`}
			/>);
		})

		return(
	    	<div>    
	        	{ articles }
			</div>
		);
	
}

export default InfoUnit;