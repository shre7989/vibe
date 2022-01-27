import { IconButton, Tooltip } from "@mui/material";
import React from "react";
import styled from "styled-components";
import HomeIcon from "@mui/icons-material/Home";
import MessageIcon from "@mui/icons-material/Message";
import PeopleIcon from "@mui/icons-material/People";
import CircleNotificationsIcon from "@mui/icons-material/CircleNotifications";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SettingsIcon from "@mui/icons-material/Settings";
import { Link } from "react-router-dom";

function AccessoryBar() {
  return (
    <AccessoryContainer>
      <Tooltip
        children={
          <img src={require("../../images/Asset 2.png")} alt="creator-logo" />
        }
        title="Creator: Mausam Shrestha"
        placement="right"
        arrow
      ></Tooltip>
      {/** Accessory top */}
      <AccesoryTop>
        {/** Home Screen */}
        <Link to="/">
          {" "}
          <IconButton size="medium">
            <HomeIcon fontSize="medium" />
          </IconButton>
        </Link>

        <IconButton size="medium">
          <MessageIcon fontSize="medium" />
        </IconButton>
        <Link to="friends">
          {" "}
          <IconButton size="medium">
            <PeopleIcon fontSize="medium" />
          </IconButton>
        </Link>

        <IconButton size="medium">
          <CircleNotificationsIcon fontSize="medium" />
        </IconButton>
      </AccesoryTop>

      {/** Accessory bottom */}
      <AccesoryBottom>
        {/** Accounts link */}
        <Link to="/account">
          {" "}
          <IconButton size="medium">
            <AccountCircleIcon fontSize="medium" />
          </IconButton>
        </Link>

        {/**Settings link */}
        <Link to="/settings">
          {" "}
          <IconButton size="medium">
            <SettingsIcon fontSize="medium" />
          </IconButton>
        </Link>
      </AccesoryBottom>
    </AccessoryContainer>
  );
}

const AccessoryContainer = styled.div`
  margin: 0;
  flex: 0.04;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: var(--secondary-dark);
  transition: all 0.3s;

  .MuiIconButton-root {
    padding: 1rem 0;
    width: 100%;
    border: none;
    border-radius: 0;

    :hover {
      border-left: 3px solid var(--primary-color);
      border-radius: 0%;
      cursor: pointer;
      color: var(--secondary-lighter);

      .MuiSvgIcon-root {
        color: var(--primary-color);
        font-size: 1.8rem;
      }
    }

    :focus {
      border-left: 2px solid white;
      border-radius: 0%;
      cursor: pointer;
      color: var(--secondary-light);
      background-color: var(--secondary-light);

      .MuiSvgIcon-root {
        color: white;
      }
    }
  }

  .MuiSvgIcon-root {
    color: white;
    transition: all 0.3s;
  }

  > img {
    padding-top: 1.5rem;
    padding-bottom: 1.5rem;
    border-radius: 0.1rem;
    :hover {
      border-bottom: 3px solid var(--primary-color);
      transition: all ease-in-out 0.2s;
    }
  }
`;

const AccesoryTop = styled.div`
  width: 100%;
  flex: 0.5;
  display: flex;
  flex-direction: column;
`;
const AccesoryBottom = styled.div`
  width: 100%;
  display: flex;
  flex: 0.5;
  flex-direction: column;
  justify-content: flex-end;
`;

export default AccessoryBar;
