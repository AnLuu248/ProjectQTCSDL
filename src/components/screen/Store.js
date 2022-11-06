import { createStore } from "state-pool";

const store = createStore();
store.setState("userlogin", false);
store.setState("examid", "");
export default store;