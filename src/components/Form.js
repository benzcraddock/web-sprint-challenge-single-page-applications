import React from 'react'

const Form = (props) => {

  const { change, submit, disabled, errors } = props;
  const { username, size, sauce, topping1, topping2, topping3, topping4, special} = props.values;

  const onChange = evt => {
    const { name, value, checked, type } = evt.target;
    const newValue = type === 'checkbox' ? checked : value;
    change(name, newValue);
  }

  const onSubmit = evt => {
    evt.preventDefault();
    submit();
  }

  return (
    <div>
      <form id="pizza-form" onSubmit={onSubmit}>
        <div id="name-input">
          <h3>Enter your Name</h3>
          <p>{errors.username}</p>
          <label>
            <input
              value={username}
              name="username"
              onChange={onChange}
              type="text"
            />
          </label>
        </div>

        <div id='size-dropdown'>
          <h3>Choice of Size</h3>
          <p>{errors.size}</p>
          <label>
            <select value={size} name="size" onChange={onChange}>
              <option value=''>Select</option>
              <option value='small'>Small</option>
              <option value='medium'>Medium</option>
              <option value='large'>Large</option>
            </select>
          </label>
        </div>

        <div className='form input'>
          <h3>Choice of Sauce</h3>
          <p>{errors.sauce}</p>
          <label>Marinara
            <input
              value='marinara'
              name='sauce'
              onChange={onChange}
              type='radio'
              checked={sauce === 'marinara'}
            />
          </label>
          <label>Pesto
            <input
              value='pesto'
              name='sauce'
              onChange={onChange}
              type='radio'
              checked={sauce === 'pesto'}
            />
          </label>
          <label>BBQ
            <input
              value='bbq'
              name='sauce'
              onChange={onChange}
              type='radio'
              checked={sauce === 'bbq'}
            />
          </label>
          <label>Spicy Marinara
            <input
              value='spicy'
              name='sauce'
              onChange={onChange}
              type='radio'
              checked={sauce === 'spicy'}
            />
          </label>
        </div>

        <div className='form input'>
          <h3>Add Toppings</h3>
          <p>{errors.topping1}</p>
          <p>{errors.topping2}</p>
          <p>{errors.topping3}</p>
          <p>{errors.topping4}</p>
          <label>Pepperoni
            <input
              name='topping1'
              onChange={onChange}
              type='checkbox'
              checked={topping1}
            />
          </label>
          <label>Pineapple
            <input
              name='topping2'
              onChange={onChange}
              type='checkbox'
              checked={topping2}
            />
          </label>
          <label>Grilled Chicken
            <input
              name='topping3'
              onChange={onChange}
              type='checkbox'
              checked={topping3}
            />
          </label>
          <label>Peppers
            <input
              name='topping4'
              onChange={onChange}
              type='checkbox'
              checked={topping4}
            />
          </label>
        </div>

        <div id='special-text'>
          <h3>Special Instructions</h3>
          <p>{errors.special}</p>
          <label>
            <input
              value={special}
              name='special'
              onChange={onChange}
              type='text'
            />
          </label>
        </div>

        <div className='submit'>
          <button id="button" disabled={disabled}>Add to Order</button>
        </div>
      </form>
    </div>
  )
}

export default Form;