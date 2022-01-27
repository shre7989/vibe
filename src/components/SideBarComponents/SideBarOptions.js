import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { auth, db } from "../../firebase";
import { doc, deleteDoc } from "firebase/firestore";
import { deleteRoom, enterRoom } from "../../features/appSlice";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { Button } from "@mui/material";
import { useAuthState } from "react-firebase-hooks/auth";

function SideBarOptions({ Icon, title, addChannelOption, id }) {
  const dispatch = useDispatch();
  const [user] = useAuthState(auth);

  const addChannel = () => {
    const channelName = prompt("Enter the Channel Name.");

    console.log("Here");
    if (channelName) {
      db.collection("rooms").add({
        name: channelName,
        manager: user.displayName,
        managerId: user.email,
      });
    }
  };
  const selectChannel = () => {
    if (id) {
      dispatch(
        enterRoom({
          roomId: id,
        })
      );
    }
  };
  const deleteChannel = (e) => {
    e.stopPropagation(); ///stop event bubbling to the highest point in DOM
    deleteDoc(doc(db, "rooms", id));
    dispatch(
      deleteRoom({
        roomId: null,
      })
    );
  };
  return (
    <SideBarOptionsContainer
      onClick={addChannelOption ? addChannel : selectChannel}
    >
      {Icon && <Icon fontSize="small" />}
      {Icon ? (
        <h4>{title}</h4>
      ) : (
        <>
          <SideBarOptionsChannel>
            <span>#</span> <h4>{title}</h4>
          </SideBarOptionsChannel>
          <Button onClick={deleteChannel}>
            <DeleteForeverIcon />
          </Button>
        </>
      )}
    </SideBarOptionsContainer>
  );
}

const SideBarOptionsContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  padding: 6px;
  align-items: left;
  .MuiSvgIcon-root {
    color: var(--primary-color);
  }
  > h4 {
    padding-left: 0.5rem;
    font-size: smaller;
    font-weight: 500;
    color: grey;
  }
  > Button {
    padding: 0;
  }
  :hover {
    background-color: black;
  }
  :focus {
    background-color: black;
  }
`;

const SideBarOptionsChannel = styled.div`
  flex: 1;
  width: 100%;
  display: flex;
  align-items: center;
  padding: 0;
  transition: all 0.2s;
  > span {
    padding-left: 0.2rem;
    font-size: large;
    font-weight: bold;
    color: var(--primary-color);
  }
  > h4 {
    padding-left: 0.8rem;
    font-size: smaller;
    font-weight: 500;
    color: grey;
  }

  :hover {
    cursor: pointer;
  }
`;

export default SideBarOptions;
