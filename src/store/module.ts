import reducerMap, {State} from './reducer/reducers';
import rootSaga from './saga/sagas';

export default ():any => ({
    id: 'StarWars',
    reducerMap,
    retained: true,
    sagas: [rootSaga],
});
