import React from 'react';
import {AppActor} from '../src/fsm/AppActor.js';
import { LinearProgress, Button } from '@mui/material';

const ProgressBar = () => {
  const [progress, setProgress] = React.useState(47);

  const onChatId = (e) => {
    console.log("onChatID")
    AppActor.send({ type: "CREATE_ACCOUNT" });
  };
  const onNoId = (e) => {
    console.log("no chat id");
    AppActor.send({ type: "CREATE_ACCOUNT" });
  };

  return (
    <div>
      <LinearProgress variant="determinate" value={progress} />
      <Button onClick={onChatId} variant="contained" color="success">
        HASCHATID
      </Button>
      <Button onClick={onNoId} variant="contained" color="error">
        NOCHATID
      </Button>
    </div>
  )
};

export default ProgressBar;