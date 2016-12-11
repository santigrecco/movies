export function addMovie(name, year, summary){
  let movie = {
    name: name,
    year: year,
    summary: summary
  }
  return (dispatch)=>{
    console.log(movie);
    dispatch({
      type:'ADD_MOVIE',
      payload:movie
    })
  }
}

export function loadLocalStorage(){
  return (dispatch)=>{
    dispatch({
      type:'INIT',
      payload:''
    })
  }
}
