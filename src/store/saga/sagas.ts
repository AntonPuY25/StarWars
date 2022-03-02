import starWarsWatcher from './saga';
import {all} from "typed-redux-saga";

export default function* rootSaga() {
    yield all([
        starWarsWatcher(),
    ])
}
