import React from 'react';
import { useSelector } from '@xstate/react';
import { AppActor } from '../../fsm/AppActor.js'
import { LoginButtonPanel } from './LoginButtonPanel.jsx';
import { LoginIDPW } from './LoginIDPW.jsx';

const authActor = AppActor.system.get('authMachine')
const selectAuthState = (snapshot) => snapshot.value

const Auth = () => {

    const uistate = useSelector(authActor, selectAuthState)

    console.log(uistate)

    return (
        <div>
            {  uistate === 'loggedOUT' ? <LoginButtonPanel /> : null}
            {  uistate === 'loginForm' ? <LoginIDPW /> : null}
        </div>
    );
}

export default Auth;