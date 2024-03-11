export const appJSON = {
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
          "makeAuthFSM",
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
