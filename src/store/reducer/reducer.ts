

import * as actions from './actions';
import {StarWarsPersonsState} from '../interface/interface';
import {ActionType, createReducer} from "typesafe-actions";
import {setCountPersonsSuccess} from "./actions";

type Actions = ActionType<typeof actions>;
const initialState: StarWarsPersonsState = {
    person: null,
    allPersons: null,
    countPersons: null,
};
const starWarsReducer = createReducer<StarWarsPersonsState, Actions>(
    initialState,
).handleAction(actions.setStarWarsPerson, (state:StarWarsPersonsState, {payload}) => ({
    ...state,
    person: payload,
}))
.handleAction(actions.setStarWarsPersons, (state:StarWarsPersonsState, {payload}) => ({
    ...state,
    allPersons: payload,
}))
.handleAction(actions.setCountPersonsSuccess, (state:StarWarsPersonsState, {payload}) => ({
    ...state,
    countPersons: payload,
}));

export default starWarsReducer;
