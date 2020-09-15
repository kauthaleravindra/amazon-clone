export const action = {
  add: "ADD_TO_BASKET",
  remove: "REMOVE_FROM_BASKET",
  setUser: "SET_USER",
};

export const initialState = {
  basket: [],
  user: null,
};

export const getBasketTotal = (basket: any) =>
  basket?.reduce((amount: number, item: any) => item.price + amount, 0);

const reducer = (state: any, action: any) => {
  switch (action.type) {
    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [...state.basket, action.item],
      };
    case "REMOVE_FROM_BASKET":
      let newBasket = [...state.basket];
      const index = state.basket.findIndex(
        (item: any) => item.id === action.id
      );
      if (index >= 0) {
        newBasket.splice(index, 1);
      }
      return {
        ...state,
        basket: newBasket,
      };
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    default:
      return state;
  }
};

export default reducer;
