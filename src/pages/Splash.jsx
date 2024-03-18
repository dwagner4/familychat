import React from 'react';
import { styled } from '@mui/material/styles';
import {LoginButtonPanel} from '../components/login_choice/LoginButtonPanel';
import { AppActor } from '../fsm/AppActor.js'
import { useSelector } from '@xstate/react';
import { LoginIDPW } from '../components/login_choice/LoginIDPW';



const Root = styled('div')(({ theme }) => ({
    height: '100vh',
    width: '100vw',
    background: 'url(/images/gamesplash.jpg) no-repeat center center fixed',
    backgroundSize: 'cover',
}));

const selectState = (snapshot) => snapshot.value;

const Splash = () => {

    const uistate = useSelector(AppActor, selectState)

    console.log(uistate)
    return (
        <Root>
           {  uistate === 'splash' ? <LoginButtonPanel /> : null}
           {  uistate === 'logginginIDPW' ? <LoginIDPW /> : null}
        </Root>
    );
};

export default Splash;
