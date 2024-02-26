import React from 'react';
import { styled } from '@mui/material/styles';
// import Box from '@mui/material/Box';
import ProgressBar from '../components/ProgressBar.jsx'

const Root = styled('div')(({ theme }) => ({
    height: '100vh',
    width: '100vw',
    background: 'url(/images/gamesplash.jpg) no-repeat center center fixed',
    backgroundSize: 'cover',
}));

const Splash = () => {
    return (
        <Root>
            <ProgressBar / >
        </Root>
    );
};

export default Splash;
