import { createStore } from "redux";
import reducer from "../Reducer";
import data from "../Data/data.json";

const Store = createStore(reducer, data);
console.log(Store.getState());
export default Store;
