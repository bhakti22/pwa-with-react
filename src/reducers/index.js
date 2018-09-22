import { initState }  from './initState';

export default function(state = initState.news, action){
  try{
    switch(action.type){
      case 'STORE_NEWS':
        let newState = Object.assign({}, state);
        newState.news = action.payload.data;
        // return {...state, news: action.payload.data};
        return newState;
      default:
        return state;
    }
  }catch(e){
    return state;
  }
}
