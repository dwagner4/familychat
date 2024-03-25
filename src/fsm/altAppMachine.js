import { createMachine, assign, spawnChild } from "xstate";
import {LoginFSM} from '../components/login_choice/LoginFSM' 

export const altAppMachine = createMachine(
  {
    context: {
      page: "splash",
      authFSM: {},
    },
    id: "appLogic",
    initial: "initial",
    states: {
      initial: {
        entry: [
            {type: "spawnAuthFSM"},
            "logFSM",
            
        ],
        on: {
          NO_CHAT_ID: {
            target: "loggingIn",
          },
        },
      },
      loggingIn: {
        on: {
          LOGIN_SUCCESS: {
            target: "memberNav",
          },
        },
      },
      memberNav: {
        entry: [
          {
            type: "memberPage",
          },
          {
            type: "logFSM",
          },
        ],
      },
    },
  },
  {
    actions: {
      // spawnAuthFSM: function ({ context, event, spawn }, params) {
      //   spawnChild(LoginFSM, { systemId: "authMachine" });
      //   // console.log(newAuth);
      // },
      spawnAuthFSM: assign({
        authFSM: ({ spawn }) => spawn(LoginFSM, { systemId: "authMachine" }),
      }),
    
    

      memberPage: assign({
        Page: "memberNav",
      }),
      logFSM: function ({ ctx, event }) {
        console.log(ctx);
      },
    },
    actors: {},
    guards: {},
    delays: {},
  },
);