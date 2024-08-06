import React from 'react';
import styles from './mainpage.module.css';

const MainPage = () => {
	return (
		<div className={styles.container}>
			<div className={styles.texts}>
				<div className={styles.titleTxt}>Bamboo Forest</div>
				<div className={styles.subTxt}>Ver 4.0 Mar 14</div>
			</div>
			<div className={styles.articles}>
				<div className={styles.articleBox}>
					<div className={styles.name}>이OO 님</div>
					<div className={styles.content}>
						"반신반의로 사용했는데, 마음속 나 자신을 이제야 이해하게 되었어요!"
					</div>
				</div>
				<div className={styles.articleBox} id={styles.delete}>
					<div className={styles.name}>김OO 님</div>
					<div className={styles.content}>
						"힘든 일을 잘 털어둘 곳이 없는데, 정말 따듯함을 느끼게 되는 거
						같아요."
					</div>
				</div>
				<div className={styles.articleBox}>
					<div className={styles.name}>박OO 님</div>
					<div className={styles.content}>
						"너무 진심으로 상담해주면 부담스럽고 거부감이 들 거 같았는데
						컨셉별로 다양하게 있어서 무겁지 않게 털어놓을 수 있었어요!"
					</div>
				</div>
				<div className={styles.articleBox}>
					마음속 깊은 고민을 털어버리세요!
				</div>
				<div className={styles.articleBox}>요즘 힘든 일이 많으신가요 ?</div>
				<div className={styles.articleBox}>
					너무 형식적인 위로가 싫으신가요 ?
				</div>
				<div className={styles.articleBox}>
					시시콜콜한 이야기를 나누며 힘든 일상에서 따뜻함을 느끼세요!
				</div>
				<div className={styles.articleBox}>늘 응원해요. 잘 할거에요.</div>
				<div className={styles.articleBox}>그건 부장님이 너무했네요!!!</div>
			</div>
			<div className={styles.lastcomment}>
				따듯함은 소통으로부터 시작됩니다. 함께해요 ! 😆
			</div>
		</div>
	);
};

export default MainPage;
