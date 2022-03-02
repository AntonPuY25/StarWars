import {createStandardAction} from "typesafe-actions";
import {GetCurrentPersonPayloadType, TypeResponseData} from "../interface/interface";

export const getStarWarsPerson = createStandardAction('GET_STAR_WARS_PERSON')<GetCurrentPersonPayloadType>();

export const setStarWarsPerson = createStandardAction(
    'SET_STAR_WARS_PERSON_SUCCESS',
)<TypeResponseData>();

export const getStarWarsPersons = createStandardAction('GET_STAR_WARS_PERSONS')<any>();

export const setStarWarsPersons = createStandardAction(
    'SET_STAR_WARS_PERSONS_SUCCESS',
)<TypeResponseData[]>();
