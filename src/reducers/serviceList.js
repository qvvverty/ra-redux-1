import nanoid from 'nanoid';
import {ADD_SERVICE, EDIT_SERVICE, REMOVE_SERVICE, FILTER_SERVICES} from '../actions/actionTypes'

const initialState = {
  services: [
    {id: nanoid(), name: 'Замена стекла', price: 21000},
    {id: nanoid(), name: 'Замена дисплея', price: 25000}
  ],
  filteredServices: [],
  actualServices: 'services'
};

export default function serviceListReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_SERVICE:
      const {name, price} = action.payload;
      return {...state, services: [...state.services, {id: nanoid(), name, price: Number(price)}]};
    case REMOVE_SERVICE:
      const {id} = action.payload;
      return {...state, services: state.services.filter(service => service.id !== id)};
    case EDIT_SERVICE:
      const {editingId, editedName, editedPrice} = action.payload;
      return {
        ...state,
        services: state.services.map(service => {
          return service.id === editingId ? {...service, name: editedName, price: editedPrice} : service;
        })
      };
    case FILTER_SERVICES:
      const {filterString} = action.payload;
      if (!filterString) return {...state, actualServices: 'services'};
      return {
        ...state,
        filteredServices: state.services.filter(service => service.name.toLowerCase().includes(filterString.toLowerCase())),
        actualServices: 'filteredServices'
      };
    default:
      return state;
  }
}
