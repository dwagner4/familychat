import { createMachine, createActor, assign, fromPromise, setup, spawnChild } from 'xstate';
import { db, auth } from "./backend.js";
import { authMachine }from "./components/auth/authMachine.js";



const appMachine = setup(
    {
        actions: {  
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
).createMachine(
  {
    id: 'appMachine',
    context: {
      page: 'splash',
      user: null,
      chats: [],
      activechat: null,
      notifications: [],
      authMachineRef: null,
    },
    initial: "initializing",
    states: {
      initializing: {
        entry: [
          assign({
            authMachineRef: ({ context, event, spawn }) => {
              const newCube = spawn(authMachine, { systemId: "authMachine"});
              return newCube;
            },
          }),
          "logit"
        ],
        on: {
          NO_CHAT_ID: {
            target: "Login",
          },
          HAS_CHAT_ID: {
            target: "NameInput",
          },
        },
      },
      Login: {
        entry: ["displayLogin", "logit"],
        // "invoke": {
        //   "input": {},
        //   "src": "loginMachine",
        //   onDone: {
        //     target: 'MemberNav',
        //     actions: (context, event) => {
        //       console.log(event, "Fuck You")
        //     }

        //   },
        //   onError: {
        //     target: 'MemberNav',
        //     actions: assign({ error: ({ event }) => event.error }),
        //   },
        // },
        on: {
          LOGIN: {
            target: "MemberNav",
          },
        },
      },
      NameInput: {
        entry: "displayNameInput",
        "invoke": {
          "input": {},
          "src": "loginMachine",
          onDone: {
            target: 'MemberNav',

          },
          onError: {
            target: 'MemberNav',
            actions: assign({ error: ({ event }) => event.error }),
          },
        },
        on: {
          GOCHAT: {
            target: "VisitorChatting",
          },
        },
      },
      MemberNav: {
        on: {
          CHATSELECTED: {
            target: "MemberChatting",
          },
        },
      },
      VisitorChatting: {},
      MemberChatting: {
        on: {
          QUITCHAT: {
            target: "MemberNav",
          },
        },
      },
    },
  }
);

// console.log(appMachine)

export const AppActor = createActor(appMachine, {
    systemId: 'root-family-chat',
  })

// console.log(AppActor)
  
AppActor.start()

// console.log(AppActor) ./AppActor