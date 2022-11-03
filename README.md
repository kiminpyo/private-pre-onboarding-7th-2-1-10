# 원티드 프리온보딩 프론트엔드 - Week 2-1

## 10팀 맴버 구성

<br/>

<div align=center>
	
| <img src="https://avatars.githubusercontent.com/u/26901045?v=4" width="130" height="130" />  | <img src="https://avatars.githubusercontent.com/u/105492051?v=4" width="130" height="130" /> | <img src="https://avatars.githubusercontent.com/u/92094314?v=4" width="130" height="130"/> | <img src="https://avatars.githubusercontent.com/u/101456751?v=4" width="130" height="130"/> |
| :-----------------------------------------------------------------------------------------:  | :-----------------------------------------------------------------------------------------:  | :----------------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------------:  |
|                                    :full_moon: 오지수                                         |                                :last_quarter_moon: 정억화                                    |                                           송완준                                            |                                            김미성                                            |
|                [:globe_with_meridians:silviaoh](https://github.com/silviaoh)                 |                 [:globe_with_meridians:oka7759](https://github.com/oka7759)                  |            [:globe_with_meridians:natural-nine](https://github.com/natural-nine)           |                  [:globe_with_meridians:kimitt](https://github.com/kimitt)                  |

| <img src="https://avatars.githubusercontent.com/u/83964261?v=4" width="130" height="130" /> | <img src="https://avatars.githubusercontent.com/u/103277726?v=4" width="130" height="130" /> | <img src="https://avatars.githubusercontent.com/u/93189402?v=4"  width="130" height="130" /> | <img src="https://avatars.githubusercontent.com/u/109638284?v=4" width="130" height="130"/> |
| :-----------------------------------------------------------------------------------------: | :------------------------------------------------------------------------------------------: | :------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------: |
|                                           이학성                                            |                                            김숙영                                            |                                            김인표                                            |                                           박민규                                            |
|            [:globe_with_meridians:Hakseong-Lee](https://github.com/Hakseong-Lee)            |                 [:globe_with_meridians:Maiowol](https://github.com/Maiowol)                  |                [:globe_with_meridians:kiminpyo](https://github.com/kiminpyo)                 |              [:globe_with_meridians:kyle970320](https://github.com/kyle970320)              |

</div>

<br/>

## 프로젝트 요약

### 📆 기간

#### 22년 11월 01일 ~ 22년 11월 04일

### 🔧 기술 스택

<div align=center> 
  <img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black"/> 
  <img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"/>   
  <img src="https://img.shields.io/badge/styled_components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white"/><br/>
  <img src="https://img.shields.io/badge/github-181717?style=for-the-badge&logo=github&logoColor=white"/>
  <img src="https://img.shields.io/badge/git-F05032?style=for-the-badge&logo=git&logoColor=white"/> <img src="https://img.shields.io/badge/react_router_dom-CA4245?style=for-the-badge&logo=reactrouter&logoColor=white"/> 
</div>

### 💻 실행 방법

1.  라이브러리를 설치합니다.

```
npm install
```

2.  프로젝트를 실행합니다.

```
 npm start
```

<br/>

### 배포 링크

[배포링크 바로가기](https://private-pre-onboarding-7th-2-1-10.vercel.app/)

<br/>

## 프로젝트 설명

### 📂 디렉토리 구조


<details>
<summary> 구조</summary>
<div markdown="1">

```
🗂 src
 ┣ 📁 components
    ┣ 📁 CarDetail
    ┣ 📁 CarList
    ┣ EmptyDataPage.jsx
    ┣ LoadingPage.jsx
    ┣ Navigation.jsx
    ┗ SEOMetaTags.js
 ┣ 📁 api
	 ┣ index.js
   ┗ interceptor.js
 ┣ 📁 assets
	 ┣ 📁 icon
   	  ┣ 📁 index.js
      ┗ ICON_Back.svg
 ┣ 📁 constant
	 ┣ action.js
   ┗ mock.js
 ┣ 📁 functions
   ┗ get.js
 ┣ 📂 pages
   ┣ MainCarDetail.jsx
   ┗ MainCarList.jsx
 ┣ 📂 hooks
   ┣ useGetCarDetail.js
   ┣ useGetCarList.js
   ┗ useXDragScroll.js
 ┣ 📂 layout
   ┣ RootLayout.jsx
 ┣ 📂 styles
   ┣ GlobalStyle.jsx
   ┣ theme.js
   ┗ common.js
 ┣ App.js
 ┣ index.js
 ┗ router.js
```

</div>
</details>

### ⚙️ 구현기능

1.  차량 리스트

```
- 차량이 없을 때 페이지 구현
- 카테고리 버튼 가로 메뉴 드래그
- 생성 날짜로부터 1일 이내일 때 신규 태그 처리
- 차량 불러오는 중 처리
```

2.  차량 상세 페이지

```
- 데이터 찾지 못할 시 Error Page 구현
- 데이터 요청 중 Loading 기능 구현
```

3.  추가 구현 사항

```
- react-helmet-async, react-snap 을 사용하여 카카오톡, 페이스북 공유 시 SEO 처리
  - 제목 : (브랜드이름) + (차량이름)
  - 월 (가격) 원
  - 사진: 차량 사진
```

<br/>

### 10팀의 Best Practice 선정 내용

---

<br/>

**1. 상세 페이지 Link 를 통해 state로 넘김 vs path parameter 이용해 API 호출 후 detail data 추출**

- Link를 통해 state를 넘긴다면 상세 페이지로 바로 들어갔을 때 데이터가 호출되지 않아 SEO 처리가 제대로 되지 않는 문제 때문에 path parameter를 이용해서 상세 페이지 url로 접근해도 API를 호출 후에 언제든지 detail data를 받아올 수 있도록 하는 것이 좋다고 판단함.

**2. Redux vs useState**

- 용량이 크지 않은 과제이기도 하고 직관성과 학습 및 유지보수를 위해 useState를 사용하기로 결정함

### 📝 Meeting Log

[회의록 바로가기](https://www.notion.so/Meeting-log-3eff6566fd844052b7a98702ebab8c5b?p=e312e50441c7458898fa50ca9f36bec3&pm=s)
