# Vite + React Todo Boilerplate

<p align="center">
  <img src="https://user-images.githubusercontent.com/61281239/177843432-fa16e0b3-cb3e-4fc5-808e-8becce751d12.png" />
</p>



## Getting Started

```bash
> git clone https://github.com/GDSC-Daejin/react-todo-vite-js
> yarn && yarn install
> yarn dev && vite
```

TODO의 추가, 삭제, 업데이트 같은 함수는 모두 구현이 되어있으나 수정기능의 경우 Component에 적용해두지 않았습니다.

`pages/home/index`에 homeZustandLayout과 homeJotaiLayout이 존재합니다.

테스트하실 때 둘 중 하나만 골라서 테스트해주세요.

jotai와 zustand는 모두 devtool을 지원합니다. 크롬 개발자 도구에서 redux devtool을 설치해주세요.

![스크린샷 2022-07-27 오후 9 37 57](https://user-images.githubusercontent.com/61281239/181249663-bbb32865-4466-482d-abf6-cd429d0ee517.png)

`jotai` 상태관리 파일은 `atoms`, `zustand` 상태관리 파일은 `store` 폴더에 존재합니다.



## Stack

- React.js
- [Vite](https://vitejs-kr.github.io/)
- zustand, jotai
- Eslint
- Prettier
- Styled-Components (CSS in JS)
- [Zustand (상태관리)](https://zustand.surge.sh/)



## Folder Structure

```
├── package-lock.json //프로젝트 초기
├── package.json // 프로젝트 정보가 담긴 공간입니다.
├── src
│   ├── App.tsx
│   ├── README.md
│   ├── apis //서버 통신을 위한 파일을 두는 폴더입니다.
│   ├── assets //사진, 아이콘을 저장하는 폴더입니다.
│   ├── components //버튼, 인풋 같은 재사용을 해야하는 컴포넌트를 저장하는 폴더입니다.
│   │   ├── todo.styled.ts // todoCard 스타일 파일입니다.
│   │   ├── TodoCardJotai.tsx // jotai를 사용한 TodoCard 입니다.
│   │   └── TodoCardZustand.tsx //zustand를 사용한 TodoCard 입니다.
│   ├── fonts //폰트 저장소입니다.
│   ├── layout //페이지 레이아웃을 저장하는 폴더입니다.
│   │   ├── home.styled.ts // 홈 레이아웃 스타일을 저장하는 파일입니다.
│   │   ├── homeZustand.tsx //zustand를 사용한 홈 레이아웃 파일입니다.
│   │   ├── homeJotai.tsx //jotai를 사용한 홈 레이아웃 파일입니다.
│   │   └── index.tsx //route를 위한 파일입니다.
│   ├── main.tsx
│   ├── pages // 페이지를 저장하는 폴더입니다.
│   │   └── Home
│   │       └── index.tsx
│   ├── store // 상태를 저장하는 폴더입니다.
│   │   └── todoStore.ts
│   ├── styles // 스타일을 저장하는 폴더입니다.
│   │   ├── declare.ts //커스텀 스타일을 사용하기 위한 파일입니다.
│   │   ├── fontSize.ts // 폰트 크기를 저장하는 파일입니다.
│   │   ├── globalStyles.ts // 전역 스타일을 저장하는 파일입니다.
│   │   ├── layouts.ts // 레이아웃을 저장하는 파일입니다.
│   │   ├── lightColors.ts // 색상을 저장하는 파일입니다.
│   │   ├── theme.ts // 각 에셋을 합쳐주는 파일입니다.
│   │   └── windowSize.ts // 윈도우 크기를 저장하는 파일입니다.
│   ├── types // 타입을 저장하는 폴더입니다.
│   │   └── todo.d.ts
│   ├── utils // 기타 커스텀 파일을 저장하는 폴더입니다.
│   └── vite-env.d.ts
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.ts
```
