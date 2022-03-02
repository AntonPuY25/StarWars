import starWarsReducer from './reducer';
import {StarWarsPersonsState} from "../interface/interface";

export interface State {
    starWarsReducer: StarWarsPersonsState;
}

const stateToReducer = {
    starWarsReducer: starWarsReducer,
}

export default stateToReducer;
