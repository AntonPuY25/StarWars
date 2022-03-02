

import * as actions from './actions';
import {StarWarsPersonsState} from '../interface/interface';
import {ActionType, createReducer} from "typesafe-actions";

type Actions = ActionType<typeof actions>;
const initialState: StarWarsPersonsState = {
    person: null,
    allPersons: null,
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
}));

export default starWarsReducer;
