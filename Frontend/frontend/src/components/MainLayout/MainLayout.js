import React, { useMemo } from 'react';
import styled from 'styled-components';
import Orb from '../Orb/orb';
import Navigation from '../Navigation/Navigation';

const MainLayout = ({ active, setActive, children }) => {
  // Memoizing the Orb component
  const orbMemo = useMemo(() => <Orb />, []);

  return (
    <>
      {orbMemo}
      <MainLayoutStyled>
        <Navigation active={active} setActive={setActive} />
        <main>
          {children}
        </main>
      </MainLayoutStyled>
    </>
  );
};

const MainLayoutStyled = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  background: rgba(252, 246, 249, 0.78);
  border: 3px solid #ffffff;
  backdrop-filter: blur(4.5px);
  border-radius: 32px;
  overflow-x: hidden;

  main {
    flex: 1;
    &::-webkit-scrollbar {
      width: 0;
    }
  }
`;

export default MainLayout;
