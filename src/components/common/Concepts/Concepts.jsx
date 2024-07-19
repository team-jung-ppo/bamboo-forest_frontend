import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Concepts.css';

function Concepts(props) {
	const [battery, setBattery] = useState(0);
	const [modal, setModal] = useState('false');

	useEffect(() => {
		axios.get('https://{{url}}/api/batteries/info').then((responce) => {
			setBattery(responce.data);
		});
	});

	const checkAvailable = () => {
		if (battery < props.cost) setModal(true);
	};
	return (
		<div className="container">
			<img src={props.img} alt="" className="conceptImg" />
			<div className="conceptName">{props.name}</div>
			<div className="features">{props.features}</div>
			<div className="cost">{props.cost} 건전지 필요</div>
			<button onClick={checkAvailable} className="chooseBtn">
				선택하기
			</button>
		</div>
	);
}

export default Concepts;
