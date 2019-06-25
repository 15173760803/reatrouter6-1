import {ADD,DEL} from './action'



export function rdfun(state=10,active){
  switch(active.type){
      case ADD:
         return state+active.data;
         break;
      case DEL:
         return state-active.data;
         break;
    default:
        return state;
        break;
  }
}