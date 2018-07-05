let reducer = (state, action) => {

    switch(action.type){
        case 'CHANGE': return Object.assign({},state,{title:action.title});
        case 'UPDATE': return Object.assign({},state,{title:action.title});
        default: return state;
    }

}

export default reducer;