import React from 'react';
import './Concepts.css';

function Concepts(props) {
	return (
		<div className="container">
			<img src={props.img} alt="" className="conceptImg" />
			<div className="conceptName">{props.name}</div>
			<div className="features">{props.features}</div>
			<div className="cost">{props.cost} 건전지 필요</div>
			<button className="chooseBtn">선택하기</button>
		</div>
	);
}

export default Concepts;
