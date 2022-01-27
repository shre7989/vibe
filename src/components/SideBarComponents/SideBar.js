import { FiberManualRecord } from "@mui/icons-material";
import CreateIcon from "@mui/icons-material/Create";
import React from "react";
import styled from "styled-components";
import InsertCommentIcon from "@mui/icons-material/InsertComment";
import InboxIcon from "@mui/icons-material/Inbox";
import DraftsIcon from "@mui/icons-material/Drafts";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import GroupsIcon from "@mui/icons-material/Groups";
import AppsIcon from "@mui/icons-material/Apps";
import FileCopyIcon from "@mui/icons-material/FileCopy";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AddIcon from "@mui/icons-material/Add";
import SideBarOptions from "./SideBarOptions";
import { auth, db } from "../../firebase";
import { useCollection } from "react-firebase-hooks/firestore";
import { useAuthState } from "react-firebase-hooks/auth";

function SideBar() {
  const [channels] = useCollection(db.collection("rooms"));
  const [user] = useAuthState(auth);

  return (
    <SideBarContainer>
      {/** SideBarHeader */}
      <SideBarHeader>
        <SideBarHeaderInfo>
          <h2>VIBE 🤖👽👻</h2>
          <h3>
            <FiberManualRecord />
            {user.displayName}
          </h3>
        </SideBarHeaderInfo>
        <CreateIcon />
      </SideBarHeader>
      {/** SideBarOptions */}
      <SideBarOptions Icon={InsertCommentIcon} title="Threads" />
      <SideBarOptions Icon={InboxIcon} title="Mentions & Reactions" />
      <SideBarOptions Icon={DraftsIcon} title="Saved Items" />
      <SideBarOptions Icon={BookmarkBorderIcon} title="Channel Browser" />
      <SideBarOptions Icon={GroupsIcon} title="People and User Groups" />
      <SideBarOptions Icon={AppsIcon} title="Apps" />
      <SideBarOptions Icon={FileCopyIcon} title="File Browser" />
      <SideBarOptions Icon={ExpandLessIcon} title="Show Less" />
      <hr />
      <SideBarOptions Icon={ExpandMoreIcon} title="Channels" />
      <hr />
      <SideBarOptions Icon={AddIcon} title="Create Channels" addChannelOption />
      {channels?.docs.map((doc) => (
        <SideBarOptions key={doc.id} id={doc.id} title={doc.data().name} />
      ))}
    </SideBarContainer>
  );
}

const SideBarContainer = styled.div`
  flex: 0.2;
  display: flex;
  flex-direction: column;
  height: 100vh;
  background-color: var(--secondary-light);
  align-items: center;
  border: 1px solid black;
  border-top: 0;

  > hr {
    width: 100%;
    border: 1px solid var(--secondary-dark);
    border-top: none;
  }
`;
const SideBarHeader = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  color: white;
  padding: 1rem;
  border-bottom: 1px solid var(--secondary-dark);

  > .MuiSvgIcon-root {
    color: var(--primary-color);
    border: 1px solid var(--primary-color);
  }
`;
const SideBarHeaderInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  > h2 {
    padding-left: 0.3rem;
    letter-spacing: 4px;
    font-family: "Poppins", sans-serif;
    color: white;
  }
  > h3 {
    display: flex;
    text-align: center;
    font-weight: 200;
    letter-spacing: 1px;
    color: lightgrey;
    align-items: center;

    > .MuiSvgIcon-root {
      margin-right: 0.2rem;
      padding-left: 0.1rem;
      color: limegreen;
    }
  }
`;

export default SideBar;
