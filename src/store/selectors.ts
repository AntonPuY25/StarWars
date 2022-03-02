import {State} from './reducer/reducers';

export const selectStarWarsPerson = (state: State) =>
    state.starWarsReducer.person;

export const selectStarWarsPersons = (state: State) =>
    state.starWarsReducer.allPersons;
