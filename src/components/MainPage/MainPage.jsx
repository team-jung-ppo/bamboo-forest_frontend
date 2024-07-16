import React from 'react';
import { Logo } from '../common/Logo/Logo.jsx';
import { About } from '../common/About/About.jsx';
import { Batteries } from '../common/Batteries/Batteries.jsx';

const MainPage = () => {
	return (
		<>
			<Batteries />
			<Logo />
			<About />
			<div className="concepts">
				<div className="concept1">어린아이</div>
				<div className="concept2">돌팔이 의사</div>
				<div className="concept3">아저씨</div>
			</div>
		</>
	);
};

export default MainPage;
