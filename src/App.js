import React from "react";
import { Route, Link, Routes } from "react-router-dom";
import styled from "styled-components";
import Header from "./components/NavBar/Header";
import AccessoryBar from "./components/SideBarComponents/AccessoryBar";
import SideBar from "./components/SideBarComponents/SideBar";
import Chat from "./components/ChatComponents/Chat";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./firebase";
import Login from "./components/Login";
import Spinner from "react-spinkit";
import Account from "./routes/Account";
import Settings from "./routes/Settings";
import Friends from "./routes/Friends";
function App() {
  const [user, loading] = useAuthState(auth);

  if (loading) {
    return (
      <AppLoading>
        <AppLoadingContent>
          <img src={require("./images/Vibe.png")} alt="vibe logo" />
          <Spinner name="ball-scale-multiple" color="aqua" />
        </AppLoadingContent>
      </AppLoading>
    );
  }
  return (
    <div className="App">
      {!user ? (
        <Login />
      ) : (
        <>
          <AppBody>
            <AccessoryBar />
            <SideBar />
            <Routes>
              <Route exact path="/" element={<Chat />}></Route>
              <Route exact path="/friends" element={<Friends />}></Route>
              <Route exact path="/settings" element={<Settings />}></Route>
              <Route exact path="/account" element={<Account />}></Route>
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

const AppLoading = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const AppLoadingContent = styled.div`
  display: flex;
  flex-direction: column;
  padding: 3rem;
  text-align: center;
  align-items: center;
  justify-content: center;

  > img {
    object-fit: contain;
    margin-top: 10rem;
    height: 200px;
    margin-bottom: 5rem;
  }
`;

export default App;
