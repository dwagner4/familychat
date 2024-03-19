import { fromPromise, assign } from "xstate";
import {auth} from "../backend"
// import {authMachine} from '../../OldStuff/auth/fsm/authMachine';

const appFunctions = {
    actions: {  
      spawnIDPW: {

      },
      spawnGoogle: {

      },
      makeAuthFSM: assign({
        authMachineRef: ({ context, event, spawn }) => {
          // const newAuth = spawn(authMachine, { systemId: "authMachine"});
          // return newAuth;
        },
      }),
      displayLogin: assign({
          page: 'membernav',
        }),
      displayNameInput: assign({
        page: 'membernav',
      }),
      createAccount: (ctx, event) => {
        console.log("create account", ctx);
        // auth.createUserWithEmailAndPassword(event.email, event.password )
        // .then((userCredential) => {
        //   // Signed in 
        //   const user = userCredential.user;
        //   // ...
        // })  
        // .catch((error) => {
        //   const errorCode = error.code;
        //   const errorMessage = error.message; 
        //   // ..
        // });
      },
      signInPW: (ctx) => {
        console.log("signIn", ctx)
        // auth.signInWithEmailAndPassword(event.email, event.password ) 
        // .then((userCredential) => {
        //   // Signed in 
        //   const user = userCredential.user;
        //   // ...
        // })  
        // .catch((error) => {
        //   const errorCode = error.code;
        //   const errorMessage = error.message; 
        //   // ..
        // });
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
}

export {appFunctions}