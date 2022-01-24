import { Button } from "@mui/material";
import React from "react";
import styled from "styled-components";
import { auth } from "../firebase";
import { provider } from "../firebase";

function Login() {
  const signIn = (e) => {
    e.preventDefault();
    auth.signInWithPopup(provider).catch((err) => console.log(err.message));
  };
  return (
    <LoginContainer>
      <LoginInnerContainer>
        <img src={require("../images/Vibe.png")} alt="vibe Logo" />
        <h2> Sign in to Vibe.</h2>
        <p>Mausam.vibe.com</p>
        <Button onClick={signIn}> Sign in with Google</Button>
      </LoginInnerContainer>
    </LoginContainer>
  );
}

const LoginContainer = styled.div`
  background-color: #f7f7f7;
  height: 100vh;
  width: 100%;
  display: grid;
  place-items: center;
`;
const LoginInnerContainer = styled.div`
  background-color: white;
  border-radius: 1rem;
  text-align: center;
  padding: 5rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  > img {
    object-fit: contain;
    height: 150px;
    margin-top: 3rem;
    margin-bottom: 3rem;
  }
  > Button {
    margin-top: 3rem;
    text-transform: inherit !important;
    background-color: var(--online) !important;
    color: white;
    font-weight: bold;
    border-radius: 2rem;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  }
`;

export default Login;
