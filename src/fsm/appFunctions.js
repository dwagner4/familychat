import { assign, fromPromise } from 'xstate';
import {authMachine} from '../components/auth/authMachine';

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
      newAccount: (context, event) => {
        auth.createUserWithEmailAndPassword(event.email, event.password )
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          // ...
        })  
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message; 
          // ..
        });
      },
      signIn: (context, event) => {
        auth.signInWithEmailAndPassword(event.email, event.password ) 
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          // ...
        })  
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message; 
          // ..
        });
      },
      signOut: (context, event) => {
        auth.signOut()  
        .then(() => {
          // Sign-out successful. 
        })  
        .catch((error) => {
          // An error happened. 
        });
      },
      logit: (context, event) => { 
        console.log(context)
      }
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