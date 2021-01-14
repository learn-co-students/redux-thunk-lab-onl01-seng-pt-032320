export const fetchCats = () => {
  return (dispatch) => { // This function is returned form the Action Creator
    dispatch({ type: 'LOADING_CATS' });
    fetch('https://learn-co-curriculum.github.io/cat-api/cats.json')
    .then(response => response.json())
    .then(cats => dispatch({ type: 'ADD_CATS', cats: cats.images }));
  };
}