import { fromPromise, assign } from "xstate";

export const authFunctions = {
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
      sendParentLoggedOut: ({ context, event }) => {},
      sendParentLoggedIn: ({ context, event }) => {},
      newAccount: (context, event) => {
        auth.createUserWithEmailAndPassword(event.email, event.password )
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          // ...
        })  
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message; 
          // ..
        });
      },
      signIn: (context, event) => {
        auth.signInWithEmailAndPassword(event.email, event.password ) 
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          // ...
        })  
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message; 
          // ..
        });
      },
      signOut: (context, event) => {
        auth.signOut()  
        .then(() => {
          // Sign-out successful. 
        })  
        .catch((error) => {
          // An error happened. 
        });
      },
      logit: (context, event) => { 
        console.log(context)
      }
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
      createAccount: fromPromise(async () => {
        return new Promise((resolve, reject) => {
          setTimeout(resolve, 5000);
        });
      }),
    },
    guards: {},
    delays: {},
  }