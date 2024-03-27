import React from 'react';
import { styled } from '@mui/material/styles';
import {LoginButtonPanel} from '../components/login_choice/LoginButtonPanel';
import { AppActor } from '../fsm/AppActor.js'
import { useSelector } from '@xstate/react';
import { LoginIDPW } from '../components/login_choice/LoginIDPW';
import { Button } from '@mui/material';
import AuthAlt from '../components/login_choice/AuthAlt';



const Root = styled('div')(({ theme }) => ({
    height: '100vh',
    width: '100vw',
    background: 'url(/images/gamesplash.jpg) no-repeat center center fixed',
    backgroundSize: 'cover',
}));

const selectState = (snapshot) => snapshot.value;

const handleNoId = () => {
    AppActor.send({type: 'NO_CHAT_ID'});
}

const Splash = () => {

    const uistate = useSelector(AppActor, selectState)

    console.log(uistate, AppActor)
    return (
        <Root>
           {/* {  uistate === 'splash' ? <Auth /> : null} */}
           {  uistate === 'logginginIDPW' ? <LoginIDPW /> : null}
           <Button variant="contained" onClick={handleNoId }>No ID</Button>
            <AuthAlt />
        </Root>
    );
};

export default Splash;
