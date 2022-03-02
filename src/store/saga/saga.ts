import {all, call, put, takeLatest} from 'typed-redux-saga';

import GetApi from "../request/request";
import {getStarWarsPerson, getStarWarsPersons, setStarWarsPerson, setStarWarsPersons} from "../reducer/actions";
import {getType} from "typesafe-actions";
import {GetAllPersonsPayloadType} from "../interface/interface";


function*  getStarWarsPersonWorker({
                                       payload,
                                   }: ReturnType<typeof getStarWarsPerson>) {
    try {
        const {data} = yield call(GetApi.getPerson,payload.id);
      if(data){
          yield put(setStarWarsPerson(data));
      }
    } catch (e) {
        console.log(e);
    }
}

function* getStarWarsPersonWatcher() {
     yield takeLatest(getType(getStarWarsPerson), getStarWarsPersonWorker);
}


function*  getStarWarsPersonsWorker({
                                       payload,
                                   }: ReturnType<typeof getStarWarsPersons>) {
    try {
        const {data} = yield call(GetApi.getAllPersons);
        if(data){
            yield put(setStarWarsPersons(data.results));
        }
    } catch (e) {
        console.log(e);
    }
}

function* getStarWarsPersonsWatcher() {
    yield takeLatest(getType(getStarWarsPersons), getStarWarsPersonsWorker);
}

export default function* businessWatchers() {
    yield all([getStarWarsPersonWatcher(), getStarWarsPersonsWatcher()]);
}
