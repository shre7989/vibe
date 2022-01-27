import React, { useState } from "react";
import styled from "styled-components";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import { auth, db } from "../../firebase";
import firebase from "firebase/compat/app";
import { useAuthState } from "react-firebase-hooks/auth";

function ChatInput({ chatRef, channelName, channelId }) {
  const [message, setMessage] = useState("");
  const [user] = useAuthState(auth);

  const sendMessage = (e) => {
    e?.preventDefault(); //prevents page refresh after page submit

    if (!channelId) return;

    db.collection("rooms").doc(channelId).collection("messages").add({
      user: user.displayName,
      userImage: user.photoURL,
      message: message,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });

    chatRef.current.scrollIntoView({
      behavior: "smooth",
    });
    setMessage("");
  };
  return (
    <ChatInputContainer>
      <form action="">
        <input
          value={message}
          placeholder={`Message #${channelName}`}
          onChange={(e) => setMessage(e.target.value)}
        />
        <Button hidden type="submit" onClick={sendMessage}>
          <SendIcon />
        </Button>
      </form>
    </ChatInputContainer>
  );
}

const ChatInputContainer = styled.div`
  position: absolute;
  background-color: white;
  width: 50%;
  top: 85%;
  left: 25%;
  border-radius: 3rem;

  > form {
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 0.5rem;
    border-radius: 0.5rem;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  }
  > form > input {
    flex: 0.95;
    padding-left: 1rem;
    overflow-y: scroll;
    outline: none;
    border: none;
  }
  .MuiSvgIcon-root {
    color: black;
    :hover {
      color: var(--primary-color);
    }
  }
`;
export default ChatInput;
