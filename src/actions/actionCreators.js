import {
  ADD_SERVICE,
  REMOVE_SERVICE,
  CHANGE_SERVICE_FIELD,
  RESET_SERVICE_FIELDS,
  EDIT_SERVICE
} from './actionTypes';

export function addService(name, price) {
  return {type: ADD_SERVICE, payload: {name, price}};
}

export function removeService(id) {
  return {type: REMOVE_SERVICE, payload: {id}};
}

export function changeServiceField(name, value) {
  return {type: CHANGE_SERVICE_FIELD, payload: {name, value}}
}

export function resetServiceFields() {
  return {type: RESET_SERVICE_FIELDS, payload: {}}
}

export function editService(editingId, editedName, editedPrice) {
  return {type: EDIT_SERVICE, payload: {editingId, editedName, editedPrice}}
}
