import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { selectRoomId } from "../../features/appSlice";
import ChatInput from "./ChatInput";
import { useCollection, useDocument } from "react-firebase-hooks/firestore";
import { db } from "../../firebase";
import ChatMessage from "./ChatMessage";
import NoActivity from "../NoActivity";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

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
            <ChatHeaderInfo>
              <h3> #{roomDetails?.data()?.name}</h3>
              <ExpandMoreIcon fontSize="small" />
            </ChatHeaderInfo>
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
  padding: 0.5rem;
  border-bottom: 1.5px #eeeeee solid;
`;

const ChatHeaderInfo = styled.div`
  display: flex;
  align-items: center;
  padding: 0.5rem;
  border-radius: 0.3rem;

  :hover {
    cursor: pointer;
    background-color: #efefef;
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
