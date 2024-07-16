import React from 'react';
import { Logo } from '../common/Logo/Logo.jsx';
import { About } from '../common/About/About.jsx';
import { Batteries } from '../common/Batteries/Batteries.jsx';
import Concepts from '../common/Concepts/Concepts.jsx';
import './MainPage.css';

const MainPage = () => {
	return (
		<>
			<Batteries />
			<Logo />
			<About />
			<div className="concepts">
				<Concepts
					img="src/assets/bambooForestLogo.png"
					name="어린아이"
					features="명량함"
					cost="200"
				/>
				<Concepts
					img="src/assets/bambooForestLogo.png"
					name="돌팔이 의사"
					features="엉뚱함"
					cost="200"
				/>
				<Concepts
					img="src/assets/bambooForestLogo.png"
					name="아저씨"
					features="잔소리"
					cost="0"
				/>
			</div>
		</>
	);
};

export default MainPage;
