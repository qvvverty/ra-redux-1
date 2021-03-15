import {CHANGE_SERVICE_FIELD, RESET_SERVICE_FIELDS} from '../actions/actionTypes'

const initialState = {
  name: '',
  price: '',
  editingId: '',
};

export default function serviceAddReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_SERVICE_FIELD:
      const {name, value} = action.payload;
      return {...state, [name]: value};
    case RESET_SERVICE_FIELDS:
      return initialState;
    default:
      return state;
  }
}
