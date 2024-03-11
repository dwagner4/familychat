import { createMachine } from "xstate";
import { authLogic } from "./authLogic";
import { authFunctions } from "./authFunctions";

export const authMachine = createMachine(
  authLogic,
  authFunctions,
);