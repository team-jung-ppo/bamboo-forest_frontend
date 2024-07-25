import React from 'react';
import { Logo } from '../common/Logo/Logo.jsx';
import { About } from '../common/About/About.jsx';
import { Batteries } from '../common/Batteries/Batteries.jsx';
import Concepts from '../common/Concepts/Concepts.jsx';
import styles from './mainPage.module.css';

const MainPage = () => {
	const conceptsData = [
		{
			img: 'src/assets/bambooForestLogo.png',
			name: '어린아이',
			features: '명량함',
			cost: '200',
		},
		{
			img: 'src/assets/bambooForestLogo.png',
			name: '돌팔이 의사',
			features: '엉뚱함',
			cost: '200',
		},
		{
			img: 'src/assets/bambooForestLogo.png',
			name: '아저씨',
			features: '잔소리',
			cost: '0',
		},
	];
	return (
		<>
			<Batteries />
			<Logo />
			<About />
			<div className={styles.concepts}>
				{conceptsData.map((concepts, index) => (
					<Concepts
						key={index}
						img={concepts.img}
						name={concepts.name}
						features={concepts.features}
						cost={concepts.cost}
					/>
				))}
			</div>
		</>
	);
};

export default MainPage;
