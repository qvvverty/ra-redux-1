import React from 'react'
import {useSelector, useDispatch} from 'react-redux';
import {removeService, changeServiceField, filterServices} from '../actions/actionCreators';

function ServiceList() {
  const items = useSelector(state => state.serviceList);
  const dispatch = useDispatch();

  const handleNameFilter = evt => {
    dispatch(filterServices(evt.target.value));
  }

  const handleEdit = (id, name, price) => {
    dispatch(changeServiceField('editingId', id));
    dispatch(changeServiceField('name', name));
    dispatch(changeServiceField('price', price));
  }

  const handleRemove = id => {
    dispatch(removeService(id));
  }

  return (
    <>
      <input name="filter" onChange={handleNameFilter} /> Filter by name
      <ul>
        {items[items.actualServices].map(o => (
          <li key={o.id}>
            {o.name} {o.price}
            <button onClick={() => handleEdit(o.id, o.name, o.price)}>✎</button>
            <button onClick={() => handleRemove(o.id)}>✕</button>
          </li>
        ))}
      </ul>
    </>
  )
}

export default ServiceList
