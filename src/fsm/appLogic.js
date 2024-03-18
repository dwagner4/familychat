export const appJSON = {
  "context": {
    "page": "splash",
    "user": null,
    "chats": [],
    "activechat": null,
    "notifications": [],
    "authMachineRef": null
  },
  "id": "appMachine",
  "initial": "splash",
  "states": {
    "splash": {
      "on": {
        "LOGIN_PW_ID": {
          "target": "logginginIDPW"
        },
        "LOGIN_GOOGLE": {
          "target": "logginginGoggle"
        },
        "NO_LOGIN": {
          "target": "non-member-chat"
        }
      }
    },
    "logginginIDPW": {
      "entry":[ 
        (ctx, event) => console.log("logginginIDPW")
      ],
      "on": {
        "LOGIN_SUCCESS": {
          "target": "member-chat"
        }
      }
    },
    "logginginGoggle": {
      "entry":[ 
        (ctx, event) => console.log("logginginGoogle")
      ],
      "on": {
        "LOGIN_SUCCES": {
          "target": "member-chat"
        }
      }
    },
    "non-member-chat": {},
    "member-chat": {
      "on": {
        "LOGOUT": {
          "target": "logginOUT"
        }
      }
    },
    "logginOUT": {
      "on": {
        "LOGGED_OUT": {
          "target": "splash"
        }
      }
    }
  }
}