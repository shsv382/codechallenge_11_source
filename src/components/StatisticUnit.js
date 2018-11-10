import React from 'react';
import { unitsArray } from './stat-units';
import StatisticAside from './StatisticAside';

const StatisticUnit = (props) => {
		const asides = unitsArray.map((unit, i) => {
			return (<StatisticAside 
				title={unit.title}
				number={unit.number}
				description={unit.description}
				scrollEmersion={props.scrollEmersion}
				unitEmersion={props.unitEmersion} 
				index={i}
				key={`SA-key-${i}`}
			/>);
		})

		return(
			<div className="statistic-unit">
	          { asides }
	        </div>
		);
	
}

export default StatisticUnit;