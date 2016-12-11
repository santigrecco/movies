export default function MovieReducer(state = [], action){
  switch (action.type) {
    case 'ADD_MOVIE' :{
        action.payload.id = state.length;
         state = [
          ...state,
          action.payload
        ]
        localStorage.setItem('movies', JSON.stringify(state));
        return state;
      break;
    }

    case 'INIT':{
      let ls = JSON.parse(localStorage.getItem('movies'));
      if(ls){
        return ls;
      }else{
        return [];
      }
      break;
    }

    default:{
      return state;
      break;
    }
  }



}
