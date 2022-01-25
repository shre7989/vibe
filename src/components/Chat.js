import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import StarsIcon from "@mui/icons-material/Stars";
import InfoIcon from "@mui/icons-material/Info";
import { useSelector } from "react-redux";
import { selectRoomId } from "../features/appSlice";
import ChatInput from "./ChatInput";
import { useCollection, useDocument } from "react-firebase-hooks/firestore";
import { db } from "../firebase";
import ChatMessage from "./ChatMessage";
import NoActivity from "./NoActivity";

function Chat() {
  const chatRef = useRef(null);
  const roomId = useSelector(selectRoomId);
  const [roomDetails] = useDocument(
    roomId && db.collection("rooms").doc(roomId)
  );
  const [roomMessages, loading] = useCollection(
    roomId &&
      db
        .collection("rooms")
        .doc(roomId)
        .collection("messages")
        .orderBy("timestamp", "asc")
  );
  useEffect(() => {
    chatRef?.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [roomId, loading]);

  if (!roomId) return <NoActivity />;

  return (
    <ChatContainer>
      {roomDetails && roomMessages && (
        <>
          <ChatHeader>
            <ChatHeaderLeft>
              <StarsIcon fontSize="large" />
              <h3> #{roomDetails?.data()?.name}</h3>
            </ChatHeaderLeft>
            <CharHeaderRight>
              <InfoIcon />
              <h4>Details</h4>
            </CharHeaderRight>
          </ChatHeader>

          <ChatHistory>
            {roomMessages?.docs.map((doc) => {
              const { user, userImage, message, timestamp } = doc.data();

              return (
                <ChatMessage
                  key={doc.id}
                  user={user}
                  userImage={userImage}
                  message={message}
                  timestamp={timestamp}
                />
              );
            })}
            <ChatBottom ref={chatRef} />;
          </ChatHistory>

          <ChatInput
            chatRef={chatRef}
            channelName={roomDetails?.data()?.name}
            channelId={roomId}
          />
        </>
      )}
    </ChatContainer>
  );
}
const ChatContainer = styled.div`
  position: relative;
  flex: 0.76;
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: white;
`;

const ChatHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  border-bottom: 1px #eeeeee solid;

  /* box-shadow: 0px 1px 2px 1px rgba(0, 0, 255, 0.2); */
`;
const ChatHeaderLeft = styled.div`
  display: flex;
  align-items: center;

  > .MuiSvgIcon-root {
    color: var(--primary-color);
  }
  > h3 {
    padding-left: 0.5rem;
    letter-spacing: 1px;
  }
`;
const CharHeaderRight = styled.div`
  display: flex;
  align-items: center;

  > .MuiSvgIcon-root {
    color: black;
    transition: all 0.3s;

    :hover {
      cursor: pointer;
      font-size: 30px;
    }
  }

  > h4 {
    padding-left: 0.5rem;
    font-weight: 500;
    color: black;
  }
`;

const ChatHistory = styled.div`
  height: 100%;
  width: 100%;
  background-color: white;
  overflow-y: scroll;
`;

const ChatBottom = styled.div`
  padding-bottom: 200px;
`;
// const ChatInput = styled.div`
//   position: absolute;
// `;

export default Chat;
