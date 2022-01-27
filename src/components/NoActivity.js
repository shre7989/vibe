import React from "react";
import styled from "styled-components";

function NoActivity() {
  return (
    <NoActivityContainer>
      <img
        src={require("../images/undraw_friendship_mni7.png")}
        alt="no-activity"
      />
      <h2>Create or Enter a New Channel to Hangout!</h2>
    </NoActivityContainer>
  );
}

const NoActivityContainer = styled.div`
  flex: 0.76;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  > img {
    object-fit: contain;
    width: 50%;
  }
  > h2 {
    color: grey;
    font-family: monospace;
  }
`;
export default NoActivity;
