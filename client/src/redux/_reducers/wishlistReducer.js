const initState = {
  wishLists: [
    {
      products: [{ test: "1" }, { test: "2" }, { test: "3" }],
    },
    {
      products: [{ test: "1" }, { test: "2" }, { test: "3" }],
    },
  ],
  error: null,
  loading: true,
};

const wishlistReducer = (state = initState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default wishlistReducer;
