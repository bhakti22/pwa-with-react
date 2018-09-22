import * as types from './types';

export function storeNews(data){
  return{
    type : types.STORE_NEWS,
    payload : {
      data
    }
  }
}
