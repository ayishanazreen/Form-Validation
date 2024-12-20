import React from 'react'

const TextInput = ({label, name, value, id, onChange, onBlur, error}) => {
  return (
    <div>
      <div className='input-control'>
          <label htmlFor="f_name">{label}
          <input
              type="text"
              id={id}
              value={value}
              onChange={onChange}
              onBlur={onBlur}
              name={name}
            />
          </label>
          </div>
          {error && <p className='danger'>{label} is required</p>}
    </div>
  )
}

export default TextInput
