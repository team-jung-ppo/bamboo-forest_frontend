import React from 'react';
import { Logo } from '../common/Logo/Logo.jsx';
import { About } from '../common/About/About.jsx';

const MainPage = () => {
  return (
    <>
      <Logo />
      <About />
      <div className="batteryInfo">건전지 정보 ...</div>
      <div className="concepts">
        <div className="concept1">어린아이</div>
        <div className="concept2">돌팔이 의사</div>
        <div className="concept3">아저씨</div>
      </div>
    </>
  );
};

export default MainPage;
