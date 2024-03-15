export const authLogic = {
  "context": {
    "loggedIn": false,
    "userInfo": null
  },
  "id": "loginMachine",
  "initial": "loggedOut",
  "states": {
    "loggedOut": {
      "entry": [{
        "type": "sendParentLoggedOut",
        
        },
        {
          "type": "logit",
          "params": {
            "state": "LoggedOut"
          }
        }
      ],
      "on": {
        "LOG_PW": {
          "target": "loggingWithPW"
        },
        "LOG_GOOGLE": {
          "target": "loggingWithGoogle"
        },
        "CREATE_ACCOUNT": {
          "target": "CreatingAccount"
        }
      }
    },
    "loggingWithPW": {
      "invoke": {
        "input": {
          "pw": "",
          "email": ""
        },
        "src": "pwLoginMachine",
        "onDone": [
          {
            "target": "loggedIn"
          }
        ],
        "onError": [
          {
            "target": "loggingWithPW"
          }
        ]
      },
      "on": {
        "CANCEL": {
          "target": "loggedOut"
        }
      }
    },
    "loggingWithGoogle": {
      "invoke": {
        "input": {},
        "src": "googleLoginMachine",
        "onDone": [
          {
            "target": "loggedIn"
          }
        ],
        "onError": [
          {
            "target": "loggingWithGoogle"
          }
        ]
      },
      "on": {
        "CANCEL": {
          "target": "loggedOut"
        }
      }
    },
    "CreatingAccount": {
      "entry": {
        "type": "logit",
        "params": {
          "state": "CreatingAccount"
        }
      },
      "on": {
        "SUBMIT_ID_PW": {
          entry: ["logit"],
          "target": "CreatingAccount",
          "actions": [ "createAccount", "logit" ]
        },
        "SUCCESS": {
          "target": "loggedIn"
        },
        "FAILURE": {
          "target": "CreatingAccount"
        }
      }
    },
    "loggedIn": {
      "entry": {
        "type": "sendParentLoggedIn"
      }
    },
    "loggingOut": {
      "entry": {
        "type": "logout"
      },
      "on": {
        "LOGOUT": {
          "target": "loggedOut"
        }
      }
    }
  },
  "on": {
    "LOGOUT": {
      "target": ".loggingOut"
    },
    "expandUI": {
      "target": "#loginMachine",
      "actions": {
        "type": "expandUI"
      }
    },
    "minimizeUI": {
      "target": "#loginMachine",
      "actions": {
        "type": "minimizeUI"
      }
    }
  }
}