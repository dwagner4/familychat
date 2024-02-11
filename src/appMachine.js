import { createMachine, createActor, assign, setup } from "xstate";

const appMachine = setup(
    {
        actions: {},
        actors: {},
        guards: {},
        delays: {},
    }
).createMachine(
  {
    context: {
      user: null,
      chats: [],
      activechat: null,
      notifications: [],
      // showProgress: true,
      // showAuth: false,
      // showAds: false,
      // showChat: false,
      // showGame: false,
      // showNotification: false,
      // showThreadNav: false,
      // showMenu: true,
      showProgress: true,
      showAuth: true,
      showAds: true,
      showChat: true,
      showGame: true,
      showNotification: true,
      showThreadNav: true,
      showMenu: true,
    },
    id: "New Machine",
    initial: "initializing",
    states: {
      initializing: {
        on: {
          NOCHATID: {
            target: "Login",
          },
          HASCHATID: {
            target: "NameInput",
          },
        },
      },
      Login: {
        on: {
          LOGIN: {
            target: "MemberNav",
          },
        },
      },
      NameInput: {
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

// console.log(AppActor) 