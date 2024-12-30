# vanilaJS-study

Nomad Coder의 vanila JS 강의 실습용 repo

## 1. Momentum Clone

Momentum 앱을 클론 코딩하는 프로젝트
**구현 기능**

- 로그인 폼
- 현재 시간 표시
- 랜덤 문구 표시
- 랜덤 배경 이미지 표시
- To Do 리스트 CRUD
- 현재 지역의 날씨 정보 표시

**사용 기술**

- HTML
- CSS
- JavaScript

**To Do**

- [x] CSS 사용하여 화면 재구성
  - 기본적인 처리는 완료
  - 배경에 따라서 텍스트 부분의 음영 처리 구분하여 처리하면 더 좋을 듯

**참고**

- config.js 파일이 분리되어 있어, 확인 시 `npx http-server`를 통해 local server를 실행하여 확인해야 함. (단순 로컬 파일에서 실행 시 CORS 오류 발생)
- 혹은 cursor에서 `Live Server` 확장 프로그램을 설치하여 dev 환경에서 확인하는 방법도 가능

## 2. 그림 앱 만들기

Canvas API를 사용하여 그림판과 밈(meme) 생성기를 만들어보는 프로젝트

**구현 기능**

- 그림판
  - 펜 도구
    - 색상 바꾸기
    - 펜 굵기 바꾸기
  - 지우개 도구
  - 채우기 도구
  - 그림판 저장
- 밈(meme) 생성기
  - 이미지 업로드
  - 텍스트 추가
  - 이미지 저장

**사용 기술**

- HTML
- CSS
- JavaScript
  - Canvas API
