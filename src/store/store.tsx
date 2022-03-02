import {composeWithDevTools} from 'redux-devtools-extension';
import {createStore, IExtension, IModuleStore} from "redux-dynamic-modules";
import {getSagaExtension} from 'redux-dynamic-modules-saga';


import {State} from './reducer/reducers';

import reduxRootModule from './module';




const extensionsList: IExtension[] = [getSagaExtension()];


const store: IModuleStore<State> = createStore(
    {
        enhancers: [],
        extensions: extensionsList,
        advancedComposeEnhancers: composeWithDevTools({}),
    },
    reduxRootModule(),
);

export default store;
