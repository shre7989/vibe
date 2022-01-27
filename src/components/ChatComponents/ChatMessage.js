import React from "react";
import styled from "styled-components";

function ChatMessage({ user, userImage, message, timestamp }) {
  const currDate = new Date(timestamp?.toDate());

  console.log(userImage);
  return (
    <ChatMessageContainer>
      <img src={userImage} alt="userImage" />
      <ChatMessageInfo>
        <h4>{user}</h4> <span>{currDate.toUTCString()}</span>
        <p>{message}</p>
      </ChatMessageInfo>
      <span></span>
    </ChatMessageContainer>
  );
}

const ChatMessageContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem;
  background-color: white;
  > img {
    height: 40px;
    width: 40px;
    border-radius: 0.2rem;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.24), 0 1px 2px rgba(0, 0, 0, 0.48);
  }
`;
const ChatMessageInfo = styled.div`
  padding-left: 1rem;
  > h4 {
    display: inline;
  }
  > span {
    padding-left: 0.5rem;
    font-size: smaller;
    color: grey;
  }
  > p {
    background-color: white;
  }
`;
export default ChatMessage;
