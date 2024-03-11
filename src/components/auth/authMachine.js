import { createMachine, fromPromise, assign } from "xstate";

export const authMachine = createMachine(
  {
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
  },
  {
    actions: {
      expandUI: assign({
        expandUI: true,
      }),
      minimizeUI: assign({
        expandUI: false,
      }),
      logout: function ({ context, event }, params) {
        console.log("WTF, loggingout");
      },
    },
    actors: {
      pwLoginMachine: fromPromise(async () => {
        return new Promise((resolve, reject) => {
          setTimeout(resolve, 5000);
        });
      }),
      googleLoginMachine: fromPromise(async () => {
        return new Promise((resolve, reject) => {
          setTimeout(resolve, 5000);
        });
      }),
    },
    guards: {},
    delays: {},
  },
);