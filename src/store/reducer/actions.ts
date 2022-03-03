import {createStandardAction} from "typesafe-actions";
import {GetAllPersonPayloadType, GetCurrentPersonPayloadType, TypeResponseData} from "../interface/interface";


export const getStarWarsPerson = createStandardAction('GET_STAR_WARS_PERSON')<GetCurrentPersonPayloadType>();

export const setStarWarsPerson = createStandardAction(
    'SET_STAR_WARS_PERSON_SUCCESS',
)<TypeResponseData>();

export const getStarWarsPersons = createStandardAction('GET_STAR_WARS_PERSONS')<GetAllPersonPayloadType>();

export const setStarWarsPersons = createStandardAction(
    'SET_STAR_WARS_PERSONS_SUCCESS',
)<TypeResponseData[]>();

export const setCountPersonsSuccess = createStandardAction(
    'SET_COUNT_PERSONS_SUCCESS',
)<number>();
