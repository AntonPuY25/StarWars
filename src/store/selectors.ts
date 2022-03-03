import {State} from './reducer/reducers';

export const selectStarWarsPerson = (state: State) =>
    state.starWarsReducer.person;

export const selectStarWarsPersons = (state: State) =>
    state.starWarsReducer.allPersons;

export const selectStarWarsCountPersons = (state: State) =>
    state.starWarsReducer.countPersons;

export const selectStarWarsSearchFilter = (state: State) =>
    state.starWarsReducer.searchFilter;

export const selectCurrentPage = (state: State) =>
    state.starWarsReducer.currentPage;

export const selectIsLoading = (state: State) =>
    state.starWarsReducer.isLoading;

