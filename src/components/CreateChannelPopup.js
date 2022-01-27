import { Button } from "@mui/material";
import React, { useState } from "react";
import styled from "styled-components";
import Switch from "@material-ui/core/Switch";
import CloseIcon from "@mui/icons-material/Close";
import LockIcon from "@mui/icons-material/Lock";
import { useLovelySwitchStyles } from "@mui-treasury/styles/switch/lovely";

function CreateChannelPopup(createChannel) {
  const [channelName, setChannelName] = useState("");
  const [channelType, setChannelType] = useState("");
  const [channelIconType, setChannelIconType] = useState(
    <LockIcon fontSize="small" />
  );
  const [channelDescription, setChannelDescription] = useState("");
  const [toggled, setToggled] = useState(false);

  const lovelyStyles = useLovelySwitchStyles();

  const setChannelPrivate = (e) => {
    setToggled(e.target.checked);
    if (e.target.checked) {
      setChannelType("private ");
      setChannelIconType(<LockIcon fontSize="small" />);
    } else {
      setChannelType("");
      setChannelIconType("#");
    }
  };

  return (
    <CreateChannelCOntainer>
      <>
        <ChannelInfo>
          <h1>Create a {channelType}Channel</h1> <CloseIcon />
        </ChannelInfo>
        <p>
          Channels are where you communicate with your teammates. They are best
          when organized around a topic, like #soccer for example
        </p>

        <form action="">
          <NameField>
            <h3>Name</h3>
            <input
              value={channelName}
              placeholder={channelIconType}
              onChange={(e) => setChannelName(e.target.value)}
            />
          </NameField>

          <DescriptionField>
            <h3>Description</h3>
            <input
              value={channelDescription}
              placeholder="# e.g. marketing"
              onChange={(e) => setChannelDescription(e.target.value)}
            />
            <h4> What is this channel about?</h4>
          </DescriptionField>

          <PrivateField>
            <PrivateFieldInfo>
              <h3>Make Private</h3>
              <h4>
                When a Channel is set to private, only invited members can view
                or join the conversation.
              </h4>
              <Switch
                classes={lovelyStyles}
                checked={toggled}
                onChange={setChannelPrivate}
              />
            </PrivateFieldInfo>
          </PrivateField>

          <Button type="submit" onClick={createChannel}></Button>
        </form>
      </>
    </CreateChannelCOntainer>
  );
}

const CreateChannelCOntainer = styled.div``;

const ChannelInfo = styled.div``;

const NameField = styled.div``;

const DescriptionField = styled.div``;

const PrivateField = styled.div``;

const PrivateFieldInfo = styled.div``;

export default CreateChannelPopup;
