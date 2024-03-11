export const authLogic = {
    id: "loginMachine",
    initial: "loggedOut",
    states: {
      loggedOut: {
        on: {
          LOG_PW: {
            target: "loggingWithPW",
          },
          LOG_GOOGLE: {
            target: "loggingWithGoogle",
          },
        },
      },
      loggingWithPW: {
        invoke: {
          input: {},
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
      loggedIn: {},
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