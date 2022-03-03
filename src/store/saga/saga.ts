import {all, call, put, takeLatest} from 'typed-redux-saga';

import GetApi from "../request/request";
import {
    getStarWarsPerson,
    getStarWarsPersons,
    setCountPersonsSuccess, setIsLoadingSuccess,
    setStarWarsPerson,
    setStarWarsPersons
} from "../reducer/actions";
import {getType} from "typesafe-actions";


function*  getStarWarsPersonWorker({
                                       payload,
                                   }: ReturnType<typeof getStarWarsPerson>) {
    try {
        yield put(setIsLoadingSuccess(true))
        const {data} = yield call(GetApi.getPerson,payload.title);
      if(data){
          yield put(setStarWarsPerson(data.results[0]));
          yield put(setIsLoadingSuccess(false))
      }
    } catch (e) {
        console.log(e);
        yield put(setIsLoadingSuccess(false))
    }
}

function* getStarWarsPersonWatcher() {
     yield takeLatest(getType(getStarWarsPerson), getStarWarsPersonWorker);
}


function*  getStarWarsPersonsWorker({
                                       payload,
                                   }: ReturnType<typeof getStarWarsPersons>) {
    try {
        yield put(setIsLoadingSuccess(true))
        const {data} = yield call(GetApi.getAllPersons,payload);
        if(data){
            yield put(setStarWarsPersons(data.results));
            yield put(setCountPersonsSuccess(data.count));
            yield put(setIsLoadingSuccess(false))
        }
    } catch (e) {
        console.log(e);
        yield put(setIsLoadingSuccess(false))
    }
}

function* getStarWarsPersonsWatcher() {
    yield takeLatest(getType(getStarWarsPersons), getStarWarsPersonsWorker);
}


export default function* businessWatchers() {
    yield all([getStarWarsPersonWatcher(),
        getStarWarsPersonsWatcher()]);
}
