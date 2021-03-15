import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {changeServiceField, resetServiceFields, addService, editService} from '../actions/actionCreators';

function ServiceAdd() {
	const item = useSelector(state => state.serviceAdd);
	const dispatch = useDispatch();

	const handleChange = evt => {
		const {name, value} = evt.target;
		dispatch(changeServiceField(name, value));
	}

	const handleSubmit = evt => {
			evt.preventDefault();

      if (item.editingId) {
        dispatch(editService(item.editingId, item.name, item.price));
        dispatch(resetServiceFields());
        return;
      }

			dispatch(addService(item.name, item.price));
      dispatch(resetServiceFields());
	}

  const handleCancel = evt => {
    evt.preventDefault();
    dispatch(resetServiceFields());
  }

	return (
		<form onSubmit={handleSubmit}>
			<input name='name' onChange={handleChange} value={item.name} />
			<input name='price' onChange={handleChange} value={item.price} />
			<button type='submit'>Save</button>
      {item.editingId ? <button type="reset" onClick={handleCancel}>Cancel</button> : null}
		</form>
	);
}

export default ServiceAdd;
