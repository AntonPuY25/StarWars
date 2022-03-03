import * as actions from './actions';
import {StarWarsPersonsState} from '../interface/interface';
import {ActionType, createReducer} from "typesafe-actions";

type Actions = ActionType<typeof actions>;
const initialState: StarWarsPersonsState = {
    person: null,
    allPersons: null,
    countPersons: null,
    searchFilter: '',
    currentPage: 1,
    isLoading: false,
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
}))
.handleAction(actions.searchStarWarsPersonsSuccess, (state:StarWarsPersonsState, {payload}) => ({
    ...state,
    searchFilter: payload,
}))
.handleAction(actions.setCurrentPageSuccess, (state:StarWarsPersonsState, {payload}) => ({
    ...state,
    currentPage: payload,
}))
.handleAction(actions.setIsLoadingSuccess, (state:StarWarsPersonsState, {payload}) => ({
    ...state,
    isLoading: payload,
}));

export default starWarsReducer;
