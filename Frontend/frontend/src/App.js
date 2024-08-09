import React, { useState, useMemo, useContext } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import styled from 'styled-components';
import bg from './img/bg.png';
import { MainLayout } from './styles/layouts';
import Orb from './components/Orb/orb';
import Navigation from './components/Navigation/Navigation';
import Dashboard from './components/Dashboard/Dashboard';
import Income from './components/Incomes/Income';
import Expenses from './components/Expenses/Expenses';
import { useGlobalContext } from './context/globalContext';
import { AuthContext } from './context/AuthContext';
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';

function App() {
  const [active, setActive] = useState(1);
  const global = useGlobalContext();
  const { user } = useContext(AuthContext);

  const displayData = () => {
    switch (active) {
      case 1:
        return <Dashboard />;
      case 2:
        return <Dashboard />;
      case 3:
        return <Income />;
      case 4:
        return <Expenses />;
      default:
        return <Dashboard />;
    }
  };

  const orbMemo = useMemo(() => <Orb />, []);

  return (
    <AppStyled bg={bg} className="App">
      <Routes>
        {user ? (
          <>
            <Route path="/" element={
              <>
                {orbMemo}
                <MainLayout>
                  <Navigation active={active} setActive={setActive} />
                  <main>
                    {displayData()}
                  </main>
                </MainLayout>
              </>
            } />
            <Route path="*" element={<Navigate to="/" />} />
          </>
        ) : (
          <>
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/signup" element={<Signup />} />
            <Route path="*" element={<Navigate to="/login" />} />
          </>
        )}
      </Routes>
    </AppStyled>
  );
}


const AppStyled = styled.div`
  height: 100vh;
  background-image: url(${props => props.bg});
  position: relative;
  main {
    flex: 1;
    background: rgba(252, 246, 249, 0.78);
    border: 3px solid #ffffff;
    backdrop-filter: blur(4.5px);
    border-radius: 32px;
    overflow-x: hidden;
    &::-webkit-scrollbar {
      width: 0;
    }
  }
`;

export default App;
