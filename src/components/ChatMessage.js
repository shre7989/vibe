import React from "react";
import styled from "styled-components";
function ChatMessage({ user, userImage, message, timestamp }) {
  const currDate = new Date(timestamp?.toDate());

  return (
    <ChatMessageContainer>
      <img
        src={require("../images/29425565_1619933704749979_3444648704370278400_n.jpg")}
        alt=""
      />
      <ChatMessageInfo>
        <h4>{user}</h4>
        <span></span>
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
    height: 50px;
    width: 50px;
    border-radius: 0.5rem;
  }
`;
const ChatMessageInfo = styled.div`
  padding-left: 1rem;

  > p {
    background-color: white;
  }
`;
export default ChatMessage;
