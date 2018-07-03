import {createStore} from 'redux'

import reducer from './reducer'


let store = createStore(reducer,{title:'Sundeep'},window.devToolsExtension && window.devToolsExtension());

export default store;