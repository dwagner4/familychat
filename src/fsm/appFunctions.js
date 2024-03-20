import { fromPromise, assign } from "xstate";
import {auth} from "../backend"
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
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
      createAccount: (ctx) => {
        console.log("create account", ctx);

        createUserWithEmailAndPassword(auth, ctx.event.params.email, ctx.event.params.pw )
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          console.log("user", user);
          // ...
        })  
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message; 
          console.log("error", error);
          // ..
        });
      },
      signInPW: (ctx) => {
        console.log("signIn", ctx)
        signInWithEmailAndPassword(auth, ctx.event.params.email, ctx.event.params.pw ) 
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          console.log("user", user);
          // ...
        })  
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message; 
          console.log("error", error);

          // ..
        });
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