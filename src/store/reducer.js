import * as Actions from "./actions";

const initialState = {
    isLoggedIn: false,
    currentUser: null
}

const reducer = (state = initialState, action) => {
  console.log(state);
  switch (action.type) {
    case Actions.USER_LOGGEDIN:
      return {...state, ...userLogin(action.currentUser)};
      break;

    default:
    return {...state};
  }
}

let userLogin = (currentUser) => {
  return {currentUser: currentUser};
}


export default reducer;
