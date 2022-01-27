import { Button } from "@mui/material";
import React, { useState } from "react";
import styled from "styled-components";
import PersonAddIcon from "@mui/icons-material/PersonAdd";

function Friends(friends) {
  const [friendVibeTag, setFriendVibeTag] = useState("");

  const addFriend = () => {};

  return (
    <FriendsContainer>
      {/**Left side */}
      <FriendsInfo>
        <AddFriends>
          <h3>
            Add Friends <PersonAddIcon fontSize="small" />
          </h3>
          <h4>
            You can add friends using their VIBE tag. Mind that it's{" "}
            <span>CaSe SeNsItIvE!</span>
          </h4>
          <form action="">
            <input
              value={friendVibeTag}
              placeholder={`Enter a vibe tag #0000`}
              onChange={(e) => setFriendVibeTag(e.target.value)}
            />
            <Button hidden type="submit" onClick={addFriend}>
              Add Friend
            </Button>
          </form>
        </AddFriends>
        <hr />
        <FriendsList>
          {friends ? (
            <>
              {" "}
              <h3>
                This is where you live with your friends. Don't wait, go and
                make some new friends!.
              </h3>
              <img
                src={require("../images/friend-list.png")}
                alt="no-friends"
              />
            </>
          ) : (
            <h1>Noe</h1>
          )}
        </FriendsList>
      </FriendsInfo>

      {/**Right Side */}
      <ActiveFriends>
        <>
          <h2>Active Now</h2>
          <FriendsOnline></FriendsOnline>
        </>
      </ActiveFriends>
    </FriendsContainer>
  );
}

const FriendsContainer = styled.div`
  flex: 0.76;
  display: flex;
  align-items: center;

  > hr {
    color: #efefef;
  }
`;

const FriendsInfo = styled.div`
  flex: 0.8;
  display: flex;
  flex-direction: column;
`;

const AddFriends = styled.div`
  flex: 0.2;
  padding: 2rem;

  > h3 {
    display: flex;
    align-items: center;
    padding-bottom: 0.5rem;

    > .MuiSvgIcon-root {
      margin-left: 0.5rem;
      color: green;
    }
  }
  > h4 {
    color: grey;
    font-weight: 400;
    > span {
      color: red;
    }
  }

  > form {
    display: flex;
    align-items: center;
    margin-top: 1rem;
    justify-content: space-between;
    border-radius: 0.3rem;
    padding: 0.5rem;
    border: 1px solid grey;
  }

  > form > input {
    border: none;
    outline: none;
    font-size: 16px;
    font-weight: 500;
    color: grey;
  }

  > form > Button {
    background-color: green;
    padding: 0.5rem;
    color: white;
    border-radius: 0.3rem;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    transition: all 0.3s;
    :hover {
      background-color: green;
      opacity: 80%;
    }
  }
`;
const FriendsList = styled.div`
  flex: 0.7;
  flex-direction: column;
  height: 100%;
  width: 100%;
  align-items: center;
  justify-content: space-around;

  > img {
    height: 70vh;
    width: 100%;
  }

  > h3 {
    padding-top: 3rem;
    font-weight: 500;
    color: grey;
    text-align: center;
  }
`;

const ActiveFriends = styled.div`
  padding: 2rem;
  flex: 0.2;
  height: 100%;
  border-left: 1px solid #dedede;

  > h2 {
    flex: 0.1;
  }
`;

const FriendsOnline = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 0.9;
  background-color: var(--light);
`;
export default Friends;
