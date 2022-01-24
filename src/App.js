import React from "react";
import { Route, Link, Routes } from "react-router-dom";
import styled from "styled-components";
import Header from "./components/Header";
import AccessoryBar from "./components/AccessoryBar";
import SideBar from "./components/SideBar";
import Chat from "./components/Chat";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./firebase";
import Login from "./components/Login";

function App() {
  const [user, loading] = useAuthState(auth);

  return (
    <div className="App">
      {!user ? (
        <Login />
      ) : (
        <>
          <Header />
          <AppBody>
            <AccessoryBar />
            <SideBar />
            <Routes>
              <Route exact path="/" element={<Chat />}></Route>
            </Routes>
          </AppBody>
        </>
      )}
    </div>
  );
}

const AppBody = styled.div`
  background-color: white;
  height: 94vh;
  width: 100%;
  display: flex;
  flex-direction: row;
`;

export default App;
