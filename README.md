- [커밋 컨벤션](https://github.com/team-jung-ppo/bamboo-forest_frontend/wiki/%EC%BB%A4%EB%B0%8B-%EC%BB%A8%EB%B2%A4%EC%85%98)
- [코드 컨벤션](https://github.com/team-jung-ppo/bamboo-forest_frontend/wiki/%EC%BD%94%EB%93%9C-%EC%BB%A8%EB%B2%A4%EC%85%98)

# 🎋 대나무숲 🎋

- 배포 URL : http://ec2-3-27-33-141.ap-southeast-2.compute.amazonaws.com:

<br />

## 프로젝트 소개

- 대나무 숲은 여러분의 고민을 들어드리고 함께 나누는 따뜻한 챗봇 서비스입니다. 
- 언제 어디서나, 대나무 숲의 챗봇과 함께라면 혼자 고민하지 않아도 됩니다.
- 챗봇의 컨셉은 현재 아저씨, 아줌마, 어린아이가 있습니다.

<br>

## 멤버

<div align="center">
<table>
  <tr>
    <th>Profile</th>
    <th>Role</th>
    <th>Part</th>
  </tr>
  <tr>
    <td align="center">
      <a href="https://github.com/Jinoko01">
        <img src="https://avatars.githubusercontent.com/u/126740959?v=4" width="120" alt=""/>
        <br/>
        <sub><b>황용진</b></sub>
      </a>
    </td>
    <td align="center">Frontend</td>
    <td>
      카카오, 깃허브 OAuth2.0 로그인 기능, 로그아웃 기능, TossPay 결제 기능, WebSocket을 이용한 채팅 페이지, 레이아웃 구현, 배터리 구매 페이지 
    </td>
  </tr>
  <tr>
    <td align="center">
      <a href="https://github.com/minwoo1119">
        <img src="https://avatars.githubusercontent.com/u/84209687?v=4" width="120" alt=""/>
        <br/>
        <sub><b>이민우</b></sub>
      </a>
    </td>
    <td align="center">Frontend</td>
    <td>
      메인 페이지 UI, 챗봇 구매 페이지, 배터리 목록 API 요청, 챗봇 목록 API 요청, 챗봇 구매 내역 API 요청, 프로젝트 내 에러 처리
    </td>
  </tr>
</table>
</div>


<br>

## 1. 프론트엔드 기술 스택

- 프레임워크: React
- 스타일링: css 모듈
- 기타 라이브러리: Tanstack-Qeury, mui, TossPay SDK2.0, sockJS, sweetalert2, react-error-boundary
- 버전 및 이슈관리 : Github, Github Issues
- 협업 툴 : Notion, Github
  <br>

### React, css 모듈

- React
    - 컴포넌트화를 통해 추후 유지보수와 재사용성을 고려했습니다.
    - 유저 배너, 상단과 하단 배너 등 중복되어 사용되는 부분이 많아 컴포넌트화를 통해 리소스 절약이 가능했습니다.
- css 모듈
    - 기존의 css 중복 적용을 방지하기 위해 css 모듈을 채택하였습니다.
    - 빌드될 때 고유한 클래스 이름이 부여되어 네이밍 컨벤션을 정하는 비용을 절약할 수 있었습니다.


### 브랜치 전략

- Git-flow 전략을 기반으로 main, develop 브랜치와 feature 보조 브랜치를 운용했습니다.
- main, develop, Feat 브랜치로 나누어 개발을 하였습니다.
    - **main** 브랜치는 배포 단계에서만 사용하는 브랜치입니다.
    - **develop** 브랜치는 개발 단계에서 git-flow의 master 역할을 하는 브랜치입니다.
    - **Feat** 브랜치는 기능 단위로 독립적인 개발 환경을 위하여 사용하고 merge 후 각 브랜치를 삭제해주었습니다.

<br>

## 2. 프로젝트 구조



<br>
