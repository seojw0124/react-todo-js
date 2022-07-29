import React from 'react';
import HomeJotaiLayout from '../../layout/homeJotai';
import HomeZustandLayout from '../../layout/homeZustand';

import { ContainerInner, LayoutContainer } from '../../styles/layouts';

const Home = () => {
  //페이지를 만들고 내부 element는 HomeLayout에서 만듭니다.
  // devtool은 두가지 상태관리 툴을 감지 못하므로 하나만 골라서 테스트해주세요.
  return (
    <LayoutContainer>
      <ContainerInner>
        {/*jotai 코드*/}
        {/*<HomeJotaiLayout />*/}
        {/*zustand 코드*/}
        <HomeZustandLayout />
      </ContainerInner>
    </LayoutContainer>
  );
};

export default Home;
