import React from "react";
import styled from "styled-components";
import { Avatar } from "@mui/material";
import "../../index.css";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import SearchIcon from "@mui/icons-material/Search";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase";

function Header() {
  const [user] = useAuthState(auth);
  return (
    <HeaderContainer>
      {/* Header Left */}
      <HeaderLeft>
        <HeaderAvatar
          onClick={() => auth.signOut()}
          src={user?.photoURL}
          sx={{ height: 36, width: 36 }}
        />
        <AccessTimeIcon />
      </HeaderLeft>

      {/* Header search */}
      <HeaderSearch>
        <input placeholder="Search" />
        <SearchIcon />
      </HeaderSearch>

      {/* Header right */}
      <HeaderRight>
        <HelpOutlineIcon />
      </HeaderRight>
    </HeaderContainer>
  );
}

const HeaderContainer = styled.div`
  padding-top: 1rem;
  padding-bottom: 1rem;
  padding-right: 0.3rem;
  height: 6vh;
  display: flex;
  color: red;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  background-color: var(--primary-color);
`;

const HeaderLeft = styled.div`
  flex: 0.3;
  display: flex;
  align-items: center;
  margin-left: 1rem;

  > .MuiSvgIcon-root {
    color: white;
    margin-left: auto;
    margin-right: 1rem;
  }
`;

const HeaderAvatar = styled(Avatar)`
  cursor: pointer;
  :hover {
    background-color: black;
    opacity: 0.9;
  }
`;

const HeaderSearch = styled.div`
  background-color: black;

  flex: 0.4;
  display: flex;
  height: 6vh;
  width: 100%;
  padding: 1rem 1rem;
  align-items: center;
  text-align: center;
  border: 1px black solid;

  > .MuiSvgIcon-root {
    color: grey;
    margin-left: 0.3rem;
    transition: all 0.3s;
    :hover {
      color: white;
      cursor: pointer;
      font-size: 30px;
    }
  }
  > input {
    font-size: 18px;
    background-color: black;
    margin: auto;
    width: 90%;
    border: none;
    text-align: left;
    color: grey;
    outline: none;
  }
`;

const HeaderRight = styled.div`
  flex: 0.3;
  text-align: right;

  > .MuiSvgIcon-root {
    color: white;
    margin-left: auto;
    margin-right: 1rem;
  }
`;
export default Header;
