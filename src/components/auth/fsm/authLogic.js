export const authLogic = {
  context: {
    loggedIn: false,
    userInfo: null,
  },
  id: "loginMachine",
  initial: "loggedOut",
  states: {
    loggedOut: {
      entry: {
        type: "sendParentLoggedOut",
      },
      on: {
        LOG_PW: {
          target: "loggingWithPW",
        },
        LOG_GOOGLE: {
          target: "loggingWithGoogle",
        },
        CREATE_ACCOUNT: {
          target: "CreatingAccount",
        },
      },
    },
    loggingWithPW: {
      invoke: {
        input: {
          email: "",
          pw: "",
        },
        src: "pwLoginMachine",
        onDone: [
          {
            target: "loggedIn",
          },
        ],
        onError: [
          {
            target: "loggingWithPW",
          },
        ],
      },
      on: {
        CANCEL: {
          target: "loggedOut",
        },
      },
    },
    loggingWithGoogle: {
      invoke: {
        input: {},
        src: "googleLoginMachine",
        onDone: [
          {
            target: "loggedIn",
          },
        ],
        onError: [
          {
            target: "loggingWithGoogle",
          },
        ],
      },
      on: {
        CANCEL: {
          target: "loggedOut",
        },
      },
    },
    CreatingAccount: {
      invoke: {
        src: "createAccount",
        input: {
          email: "",
          pw: "",
        },
        onDone: [
          {
            target: "loggedIn",
          },
        ],
        onError: [
          {
            target: "CreatingAccount",
          },
        ],
      },
    },
    loggedIn: {
      entry: {
        type: "sendPArentLoogedIn",
      },
    },
    loggingOut: {
      entry: {
        type: "logout",
      },
      on: {
        LOGOUT: {
          target: "loggedOut",
        },
      },
    },
  },
  on: {
    LOGOUT: {
      target: ".loggingOut",
    },
    expandUI: {
      target: "#loginMachine",
      actions: {
        type: "expandUI",
      },
    },
    minimizeUI: {
      target: "#loginMachine",
      actions: {
        type: "minimizeUI",
      },
    },
  },
}