import { IconButton } from "@mui/material";
import React from "react";
import styled from "styled-components";
import HomeIcon from "@mui/icons-material/Home";
import MessageIcon from "@mui/icons-material/Message";
import PeopleIcon from "@mui/icons-material/People";
import CircleNotificationsIcon from "@mui/icons-material/CircleNotifications";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SettingsIcon from "@mui/icons-material/Settings";

function AccessoryBar() {
  return (
    <AccessoryContainer>
      {/** Accessory top */}
      <AccesoryTop>
        <IconButton size="medium">
          <HomeIcon fontSize="medium" />
        </IconButton>
        <IconButton size="medium">
          <MessageIcon fontSize="medium" />
        </IconButton>
        <IconButton size="medium">
          <PeopleIcon fontSize="medium" />
        </IconButton>
        <IconButton size="medium">
          <CircleNotificationsIcon fontSize="medium" />
        </IconButton>
      </AccesoryTop>

      {/** Accessory bottom */}
      <AccesoryBottom>
        <IconButton size="medium">
          <AccountCircleIcon fontSize="medium" />
        </IconButton>
        <IconButton size="medium">
          <SettingsIcon fontSize="medium" />
        </IconButton>
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
  height: 94vh;
  background-color: var(--secondary-dark);
  transition: all 0.3s;

  .MuiIconButton-root {
    padding: 1rem 0;
    width: 100%;
    border: none;
    border-radius: 0;

    :hover {
      border-left: 2px solid white;
      border-radius: 0%;
      cursor: pointer;
      color: var(--secondary-lighter);

      .MuiSvgIcon-root {
        color: white;
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
    color: grey;
    transition: all 0.3s;
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
