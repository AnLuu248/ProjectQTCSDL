import { createStore } from "state-pool";

const store = createStore();
store.setState("userlogin", false);
store.setState("examid", "");
store.setState("nameuser", "");

export default store;