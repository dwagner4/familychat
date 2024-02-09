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
    },
    id: "New Machine",
    initial: "initializing",
    states: {
      initializing: {
        on: {
          NOCHATID: {
            target: "Splash",
          },
          HASCHATID: {
            target: "NameInput",
          },
        },
      },
      Splash: {
        on: {
          LOGIN: {
            target: "MemberNav",
          },
          REGISTER: {
            target: "Registering",
          },
        },
      },
      NameInput: {
        on: {
          HasName: {
            target: "VisitorChatting",
          },
        },
      },
      MemberNav: {
        on: {
          ChatSelected: {
            target: "MemberChatting",
          },
        },
      },
      Registering: {
        on: {
          ERROR: {
            target: "Registering",
          },
          CANCEL: {
            target: "Splash",
          },
          SUCCESS: {
            target: "MemberNav",
          },
        },
      },
      VisitorChatting: {},
      MemberChatting: {},
    },
  }
);

console.log(appMachine)

export const AppActor = createActor(appMachine, {
    systemId: 'root-family-chat',
  })

console.log(AppActor)
  
AppActor.start()

console.log(AppActor) 