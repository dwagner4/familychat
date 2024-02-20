import { createMachine, createActor, assign, setup } from "xstate";

const appMachine = setup(
    {
        actions: {  
          displayLogin: assign({
              showProgress: false,
              showAuth: true,
              showAds: false,
              showChat: false,
              showGame: false,
              showNotification: false,
              showThreadNav: false,
              showMenu: false,
              showNavBar: true,
              showNameInput: false
            }),
          displayNameInput: assign({
              showProgress: false,
              showAuth: false,
              showAds: false,
              showChat: false,
              showGame: false,
              showNotification: false,
              showThreadNav: false,
              showMenu: false,
              showNavBar: true,
              showNameInput: true,
            }),

        },
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
      showProgress: true,
      showAuth: false,
      showAds: false,
      showChat: false,
      showGame: false,
      showNotification: false,
      showThreadNav: false,
      showMenu: false,
      showNavBar: false,
      showNameInput: false
    },
    id: "New Machine",
    initial: "initializing",
    states: {
      initializing: {
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
        entry: "displayLogin",
        on: {
          LOGIN: {
            target: "MemberNav",
          },
        },
      },
      NameInput: {
        entry: "displayNameInput",
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