export const SET_PRODUCTS = 'SET_PRODUCTS';
export const SET_LOADING = 'SET_LOADING';

export const setProducts = (products) => (dispatch) => {
  dispatch({
    type: SET_PRODUCTS,
    payload: products,
  });
};

export const setLoading = (loading) => (dispatch) => {
  dispatch({
    type: SET_LOADING,
    payload: loading,
  });
};
