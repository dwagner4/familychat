import { createActor, setup } from 'xstate';
import { appJSON } from './appLogic.js';
import { appFunctions } from './appFunctions.js';
import { altAppMachine } from './altAppMachine.js';



// const appMachine = setup(appFunctions).createMachine( appJSON );

// console.log(appMachine)

export const AppActor = createActor(altAppMachine, {
    systemId: 'root-family-chat',
  })

// console.log(AppActor)
  
AppActor.start()

// console.log(AppActor) ./AppActor