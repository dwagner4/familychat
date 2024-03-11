import { assign, fromPromise } from 'xstate';
import {authMachine} from '../components/auth/fsm/authMachine';

export const appFunctions = {
    actions: {  
      makeAuthFSM: assign({
        authMachineRef: ({ context, event, spawn }) => {
          const newAuth = spawn(authMachine, { systemId: "authMachine"});
          return newAuth;
        },
      }),
      displayLogin: assign({
          page: 'membernav',
        }),
      displayNameInput: assign({
          page: 'membernav',
        }),
    },
    actors: {
      "isPublicChat": fromPromise(async (ctx, event) => {
        console.log({ctx, event});
        return new Promise((resolve, reject) => {
          // simulate a slow auth method
          setTimeout(resolve, 1000);
        });
      }),

    "loginMachine": fromPromise(async (ctx, event) => {
        console.log({ctx, event});
        return new Promise((resolve, reject) => {
          // simulate a slow auth method
          setTimeout(resolve, 1000);
        });
      }),
    },
    guards: {},
    delays: {},
}