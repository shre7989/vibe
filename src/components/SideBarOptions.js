import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { db } from "../firebase";
import { enterRoom } from "../features/appSlice";

function SideBarOptions({ Icon, title, addChannelOption, id }) {
  const dispatch = useDispatch();
  const addChannel = () => {
    const channelName = prompt("Enter the Channel Name.");

    console.log("Here");
    if (channelName) {
      db.collection("rooms").add({
        name: channelName,
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

  return (
    <SideBarOptionsContainer
      onClick={addChannelOption ? addChannel : selectChannel}
    >
      {Icon && <Icon fontSize="small" />}
      {Icon ? (
        <h4>{title}</h4>
      ) : (
        <SideBarOptionsChannel>
          <span>#</span> <h4>{title}</h4>
        </SideBarOptionsChannel>
      )}
    </SideBarOptionsContainer>
  );
}

const SideBarOptionsContainer = styled.div`
  width: 100%;
  display: flex;
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

  :hover {
    background-color: white;
  }
`;

const SideBarOptionsChannel = styled.div`
  display: flex;
  align-items: center;
  padding: 0;

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
`;
export default SideBarOptions;
