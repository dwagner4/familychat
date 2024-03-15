import React from 'react';
import { styled } from '@mui/material/styles';
import {LoginButtonPanel} from '../components/login_choice/LoginButtonPanel';



const Root = styled('div')(({ theme }) => ({
    height: '100vh',
    width: '100vw',
    background: 'url(/images/gamesplash.jpg) no-repeat center center fixed',
    backgroundSize: 'cover',
}));

const Splash = () => {
    return (
        <Root>
           <LoginButtonPanel />
        </Root>
    );
};

export default Splash;
