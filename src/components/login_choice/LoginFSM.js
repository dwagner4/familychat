import { createMachine, fromPromise, assign, sendTo } from "xstate";
import {auth} from '../../backend.js'

export const LoginFSM = createMachine(
  {
    id: "LoginFSM",
    initial: "loggedOUT",
    context:{
      app: 'root-family-chat'
    },
    states: {
      loggedOUT: {
        entry: {
          type: "sendLogout",
        },
        on: {
          LOGIN_GOOGLE: {
            target: "loggingInGoogle",
          },
          LOGIN_PW: {
            target: "loginForm",
          },
        },
      },
      loggingInGoogle: {
        invoke: {
          input: {},
          src: "signInPopUp",
          onDone: [
            {
              target: "loggedIn",
              actions: (ctx, event) => {
                console.log(event);
              },
            },
          ],
          onError: [
            {
              target: "loggingInGoogle",
              actions: (ctx, event) => {
                console.log(event.error);
              },
            },
          ],
        },
      },
     
      loginForm: {
        description: "Allows for entry of email\n\nand password.",
        on: {
          LOGIN_SUBMIT: {
            target: "loggingInPW",
          },
          CREATE_SUBMIT: {
            target: "creatingAcct",
          },
        },
      },
      loggedIn: {
        entry: {
          type: "sendLogin",
        },
      },
      loggingInPW: {
        description: "using email and pw, either\n\nlogin or create account",
        invoke: {
          input: {
            pw: "string",
            email: "string",
          },
          src: "signInPW",
          onDone: [
            {
              target: "loggedIn",
              actions: (ctx, event) => {
                console.log(event);
              },
            },
          ],
          onError: [
            {
              target: "loggingInPW",
              actions: (ctx, event) => {
                console.log(event);
              },
            },
          ],
        },
      },
      creatingAcct: {
        invoke: {
          src: "createPWAcct",
          input: {
            email: "string",
            pw: "string",
          },
          onDone: [
            {
              target: "loggedIn",
            },
          ],
          onError: [
            {
              target: "creatingAcct",
            },
          ],
        },
      },
      loggingOut: {
        on: {
          LOGOUT_SUCCESS: {
            target: "loggedOUT",
          },
        },
      },
    },
    on: {
      HIDE: {
        actions: {
          type: "hidedisplay",
        },
      },
      SHOW: {
        actions: {
          type: "showdisplay",
        },
      },
      GET_USER: {
        actions: {
          type: "sendUserToParent",
        },
        description: "app fetches user data",
      },
      LOGOUT: {
        target: ".loggingOut",
      },
    },
  },
  {
    actions: {
      hidedisplay: assign({
        display: false,
      }),
      showdisplay: assign({
        display: true,
      }),
      sendUserToParent: sendTo("someActor", {
        type: "someEvent",
      }),
      sendLogout: ({ ctx, event }, params) => {
        console.log(ctx)
        // sendTo(ctx.app, { type: "LOGGED_OUT" });
      },
      sendLogin: ({ ctx, event }, params) => {
        sendTo(ctx.app, { type: "LOGGED_IN" });
      },
    },
    actors: {
      signInPopUp: fromPromise({
        /* ... */
      }),
      signInPW: fromPromise(async (ctx, event) => {
        console.log("in promise")
        auth.signInWithEmailAndPassword(event.email, event.password )
         
      }),
      createPWAcct: fromPromise(async (ctx) => {
        createUserWithEmailAndPassword(
          auth,
          ctx.event.params.email,
          ctx.event.params.pw,
        );
      }),
    },
    guards: {},
    delays: {},
  },
);